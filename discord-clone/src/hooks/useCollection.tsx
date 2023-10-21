import React, { useState, useEffect } from 'react'
import { onSnapshot,collection, query, DocumentData, CollectionReference, Query } from "firebase/firestore"
import { db } from '../firebase';

interface channels {
  id: string,
  channel: DocumentData
}

const useCollection = (data: string) => {
    const [documents, setDocuments] = useState<channels[]>([]);

    const  collectionRef: Query<DocumentData>= query(collection(db, data))

  useEffect(() => {
    
    onSnapshot(collectionRef,(querySnapshot) => {
      const channelsResults: channels[] = [];
      querySnapshot.docs.forEach((doc) => channelsResults.push({
        id: doc.id,
        channel:doc.data(),
      }))
      setDocuments(channelsResults)
    })
  },[]);
  return (
    {documents}
  )
}

export default useCollection