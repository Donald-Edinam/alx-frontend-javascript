import { upLoadPhoto, createUser } from './utils';

export default function handleProfileSignup(){
    Promise.all([
        upLoadPhoto(),
        createUser(),
    ])
    .then((value) =>  console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`))
    .catch((error) => console.log("Signup system offline", error))
}