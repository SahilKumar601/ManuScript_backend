export default {
    name:'author',
    title:'Author',
    type:'document',
    fields:[
        {
            name:'username',
            title:'Username',
            type: 'string',
        },
        {
            name:'image',
            title:'Profile image',
            type:'image',
            options:{
                hotspot: true,
            }
        },
        {
            name:'coverImage',
            title:'Cover image',
            type:'image',
            options:{
                hotspot: true,
            }
        }
    ]
}