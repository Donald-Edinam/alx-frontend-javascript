export default function getListStudentIds(obj) {
    const arr = Array.isArray(obj);
    
    if(arr){
        return obj.map((list) => list.id)
    }
    else{
        return [];
    }
}