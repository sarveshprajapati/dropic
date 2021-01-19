import {useEffect,useState} from 'react';
import { appFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [ docs, setDocs] = useState([]);
    useEffect(()=>{
        appFirestore.collection(collection)
        .orderBy('issuedAt','desc')
            .onSnapshot((snap)=>{
                let documents = [];
                snap.forEach(doc=>{
                    // console.log(doc.data());
                    documents.push({...doc.data(),id:doc.id})
                });
                setDocs(documents);
            }); 
        
    },[collection])

    return {docs} 
}

export default useFirestore;
