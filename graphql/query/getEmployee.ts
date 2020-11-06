export default `
    query getEmployee($id:ID) {
        getEmployee(id:$id) {
            id, 
            avatarUrl,
            title,
            firstName,
            lastName,
            gender,
            email,
            phone,
            vote,
            address  
        }
    }
`;
