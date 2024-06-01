export default function guardrail(mathFunction) {
    const queue = [];
    try{
        const value = mathFunction();
        queue.push(queue)
    }
    catch (error){
        queue.push(`Error: ${error.message}`)
    }finally{
        queue.push(" Guardrail was processed")
    }
    
    return queue;
}