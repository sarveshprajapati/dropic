import React from 'react';
import useFirestore from '../hook/useFirestore';
import {motion} from 'framer-motion';

const ImageGrid = ({setSelected}) => {
    const {docs} = useFirestore('images');
    console.log(docs);
    return (
        <div className="img-grid" >
            {/* <div className="img-wrap">
               <img src='img/ali-yahya-378984-unsplash.jpg'alt=""/>
            </div>
            <div className="img-wrap">
               <img src='img/ali-yahya-378984-unsplash.jpg'alt=""/>
            </div>
            <div className="img-wrap">
               <img src='img/ali-yahya-378984-unsplash.jpg'alt=""/>
            </div>
            <div className="img-wrap">
               <img src='img/ali-yahya-378984-unsplash.jpg'alt=""/>
            </div> */}
            {docs && docs.map(doc=>(
                < motion.div className='img-wrap' key={doc.id} onClick={()=>setSelected(doc.downloadUrl)}
                    layout
                >
                    <img src={doc.downloadUrl} alt='img'/>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
