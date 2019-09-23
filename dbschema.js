let db = {
    users:[
        {
            userId: 'dasrasrsar32r23rras4',
            email:'user@email.com',
            handle:'user',
            createdAt:'2019-09-02T09:07:07.591Z',
            imageUrl:'image/asdasdrgdgarasrsad',
            bio:'Hello there my name is user',
            location:'London UK'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body:'this is the scream body',
            createdAt: "2019-09-02T09:07:07.591Z",
            likeCount: 5,
            commentCount: 2
            
        }
    ],
    comments:[
        {
            userHandle:'user',
            screamId:'asfasasfasrgsdgbjdkg',
            body:'nice oone',
            createdAt:'2019-09-02T09:07:07.591Z',    
        }
    ],
    notification:[
        {
            recipient: 'user',
            sender: 'john',
            read: 'true|false',
            screamId:'asfsanfiasnfasnfosanfo',
            type: 'like|comment',
            createdAt:'2019-09-02T09:07:07.591Z'
        }
    ]

}

// new login redirect route.
const userDetails = {
    //Redux
    credentials:{
        userId: 'dasrasrsar32r23rras4',
        email:'user@email.com',
        handle:'user',
        createdAt:'2019-09-02T09:07:07.591Z',
        imageUrl:'image/asdasdrgdgarasrsad',
        bio:'Hello there my name is user',
        location:'London UK'
    },
    likes:[
        {
            userHandle:'user',
            screamId:'asdn71asdQasdhHNFA'
        },
        {
            userHandle:'user',
            screamId:'FAASFION230NAF09'
        },
    ],
}