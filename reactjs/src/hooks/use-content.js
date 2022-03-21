import { useEffect, useState }  from "react";
import { FirebaseContext } from "../context/firebase";


export default function useContext(target){
    const [content, setContent] = useState([]);
    const {firebase} = useContext(FirebaseContext)

    useEffect(() => {
        firebase(target)
        .collection(target)
        .get()
        .then((snapshot) => {
            const allContent = snapshot.docs.map((contentObj) =>({
                ...contentObj.data(),
                docId:contentObj.id,
            }));
            setContent(allContent);
        })
            .catch((error) => {
                console.log(error.message);
            })
    }, []);
    return {[target]: content};
}