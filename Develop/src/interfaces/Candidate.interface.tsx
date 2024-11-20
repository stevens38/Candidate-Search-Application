// TODO: Create an interface for the Candidate objects returned by the API
 

 interface Candidate {
    login: string;
    id: number;
    avatarUrl: string;
    htmlUrl: string;
    email: string;
    name: string;
    bio: string;
    company: string;
    location: string;
    }

export default Candidate;