import React, { Component } from 'react';
import HeaderPost from './HeaderPost';
import ContentPost from './ContentPost';
import FooterPost from './FooterPost';

import CreateCommentPost from './CreateCommentPost';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Diogo Cata Preta",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                postImage: "./assets/post01.png",
                date: "04 Jun 2019",
                location: "Uberlandia, Brazil",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg"
                        },
                        content: "Eu simplesmente adorei esta imagem de um futuro aplicativo. Execute."
                    },
                    {
                        id: 2,
                        author: {
                            name: "Janete Oliveira",
                            avatar: "http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg"
                        },
                        content: "Eu simplesmente adorei esta imagem de um futuro aplicativo. Execute."
                    }
                ]
            },
            {
                id: 2,
                author: {
                    name: "Diogo Cata Preta",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                postImage: "./assets/post02.png",
                date: "04 Jun 2019",
                location: "Uberlandia, Brazil",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg"
                        },
                        content: "Eu simplesmente adorei esta imagem de um futuro aplicativo. Execute."
                    },
                    {
                        id: 2,
                        author: {
                            name: "Mariana Cintra",
                            avatar: "http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg"
                        },
                        content: "Eu simplesmente adorei esta imagem de um futuro aplicativo. Execute."
                    }
                ]
            },
            {
                id: 3,
                author: {
                    name: "Diogo Cata Preta",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                postImage: "./assets/post03.png",
                date: "04 Jun 2019",
                location: "Uberlandia, Brazil",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Mariana Cintra",
                            avatar: "http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg"
                        },
                        content: "Fantástico Cata, gostei muito do resultado do desafio. Você esta no caminho certo para aprender."
                    }
                ]
            },
            {
                id: 4,
                author: {
                    name: "Diogo Cata Preta",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                postImage: "./assets/post04.png",
                date: "04 Jun 2019",
                location: "Uberlandia, Brazil",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "http://url-da-imagem.com/imagem.jpg"
                        },
                        content: "Conteúdo do comentário"
                    }
                ]
            },
            {
                id: 5,
                author: {
                    name: "Diogo Cata Preta",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                postImage: "./assets/post05.png",
                date: "04 Jun 2019",
                location: "Uberlandia, Brazil",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "http://url-da-imagem.com/imagem.jpg"
                        },
                        content: "Conteúdo do comentário"
                    }
                ]
            },
            {
                id: 6,
                author: {
                    name: "Diogo Cata Preta",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                postImage: "./assets/post06.png",
                date: "04 Jun 2019",
                location: "Uberlandia, Brazil",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: "http://url-da-imagem.com/imagem.jpg"
                        },
                        content: "Conteúdo do comentário"
                    }
                ]
            }
        ]
    };

    render() {
        return (
            <div class="row">
                { this.state.posts.map((post) =>
                    <div class="col-lg-6 offset-lg-3">
                        <div class="cardbox shadow-lg bg-white">

                            <HeaderPost nome={post.author.name} fotoPerfil={post.author.avatar} local={post.location} horarioPost={post.date}/>
                            <ContentPost conteudoPost={post.postImage} />
                            <FooterPost post={post}/>

                            <CreateCommentPost />
                        </div>
                    </div>
                ) }
            </div>
        );
    }
}

export default PostList;
