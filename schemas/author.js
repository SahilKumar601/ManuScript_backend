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
            name:'author',
            title:'Author',
            type: 'string',
        },
        {
            name:'title',
            title:'Title',
            type:'string',
        },
        {
            name:'organisation',
            title:'Organisation',
            type:'string',
        },
        {
            name:'image',
            title:'Profile image',
            type:'string',
        },
        {
            name:'coverImage',
            title:'Cover Image',
            type:'image',
            options:{
                hotspot: true,
            }
        }
    ]
}