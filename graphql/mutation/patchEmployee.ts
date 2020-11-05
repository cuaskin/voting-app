export default `
    mutation patchEmployee($id:ID,$vote:Int) {
        patchEmployee(id:$id,vote:$vote) {
            id, 
            avatarUrl,
            title,
            firstName,
            lastName,
            gender,
            email,
            phone,
            vote 
        }
    }
`;
