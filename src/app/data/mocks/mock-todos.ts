import { Todos } from '../models/Todos'

export const TODOS: Todos[] = [
    {
        id: 1,
        title: 'Learn Angular',
        category: 'Studies',
        description: 'Get to know one of most popular frameworks',
        isDone: false,
        imgSrc: 'https://image.freepik.com/free-photo/coding-man_1098-18084.jpg'
    },
    {
        id: 2,
        title: 'Write an introduction to an engineering thesis',
        category: 'Studies',
        description: 'Specific and to the point',
        isDone: true,
        imgSrc: 'https://image.freepik.com/free-photo/research-net_1098-16273.jpg'
    },
    {
        id: 3,
        title: 'Retouching photos with a model',
        category: 'Photography',
        description: '',
        isDone: false,
        imgSrc: 'https://image.freepik.com/free-photo/unrecognizable-photographer-sitting-desk-retouching-photos-computer_1098-17848.jpg'
    },
    {
        id: 4,
        title: 'Photosession with Magdalena',
        category: 'Photography',
        description: 'In Wrocław',
        isDone: true,
        imgSrc: 'https://image.freepik.com/free-photo/fashion-girl-black-leather-jacket-holding-old-camera_176420-8972.jpg'
    },
    {
        id: 5,
        title: 'Website design',
        category: 'Media agency',
        description: 'Breathtaking project for demanding client',
        isDone: true,
        imgSrc: 'https://image.freepik.com/free-photo/working-space-business-freelance-concept-top-view-flat-lay-toning_1220-1856.jpg'
    },
    {
        id: 6,
        title: 'Deploy app',
        category: 'Development',
        description: '',
        isDone: false,
        imgSrc: 'https://image.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg'
    }
]