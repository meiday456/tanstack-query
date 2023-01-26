
const user = {
    all : ['user'] as const ,
    allQuery : ()=>[...user.all , 'query'],
    query: {
        list: ()=>[...user.allQuery() , 'list'],
        detail: (id:number)=>[...user.allQuery() , 'detail' , id]
    }
}
const post = {
    all: ['post'] as const,
    allQuery: () => [...post.all, 'query'] as const,
    allMutation: () => [...post.all, 'mutation'] as const,
    query: {
        lists: () => [...post.allQuery(), 'list'] as const,
        details: () => [...post.allQuery(), 'detail'] as const,
        detail: (id: number) => [...post.query.details(), id] as const,
    },
    mutation: {
        create: ()=>[...post.allMutation() , 'create'],
        update: ()=>[...post.allMutation() , 'update'],
        delete: (id:number)=>[...post.allMutation() , 'delete', id]
    }
}

const queryKeys = {
    user,
    post
}

export default queryKeys


