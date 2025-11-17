'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation'; 
import { groupData, GroupBiodata } from '../../lib/data';

interface KpopGroup {
  id: number;
  name: string;
}


export default function GroupDetail() { 
  
  const params = useParams(); 
  
  const [group, setGroup] = useState<KpopGroup | null>(null);
  const [biodata, setBiodata] = useState<GroupBiodata | null>(null);
  const [loading, setLoading] = useState(true);

  const storageKey = 'myKpopList';

  useEffect(() => {

    if (!params || !params.id) {
      return; 
    }


    const currentId = Array.isArray(params.id) ? params.id[0] : params.id;

    const storedGroups = localStorage.getItem(storageKey);
    if (storedGroups) {
      const groups: KpopGroup[] = JSON.parse(storedGroups);
      
  
      const foundGroup = groups.find((g) => g.id === Number(currentId));
      
      if (foundGroup) {
        setGroup(foundGroup);
        
        const dbKeys = Object.keys(groupData);
        const foundKey = dbKeys.find(key => 
          key.toLowerCase() === foundGroup.name.toLowerCase()
        );
        const foundBiodata = foundKey ? groupData[foundKey] : null;
        
        if (foundBiodata) {
          setBiodata(foundBiodata);
        }
      }
    }
    setLoading(false);
  }, [params]); 

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!group) {
    return (
      <div className="alert alert-danger">
        Grup tidak ditemukan di list Anda.
        <div className="mt-3">
          <Link href="/kpop-list" className="btn btn-secondary">
            Kembali ke List
          </Link>
        </div>
      </div>
    );
  }

  if (!biodata) {
    return (
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="h4 mb-0">Detail Grup</h2>
        </div>
        <div className="card-body">
          <h1 className="card-title text-primary">{group.name}</h1>
          <p className="text-muted">
            Biodata untuk grup ini tidak ditemukan di database.
          </p>
          <hr />
          <Link href="/kpop-list" className="btn btn-secondary">
            Kembali ke List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h2 className="h4 mb-0">Biodata: {biodata.name}</h2>
      </div>
      
      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
        <Image 
          src={biodata.imageSrc} 
          alt={biodata.name} 
          fill={true}
          style={{ objectFit: 'cover' }}
          className="card-img-top" 
        />
      </div>
      
      <div className="card-body">
        <h1 className="card-title text-primary">{biodata.name}</h1>
        <p className="card-text">
          {biodata.description}
        </p>
        <hr />
        <Link href="/kpop-list" className="btn btn-secondary">
          Kembali ke List
        </Link>
      </div>
    </div>
  );
}