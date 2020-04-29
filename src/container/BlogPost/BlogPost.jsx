import React,{Component,Fragment} from 'react';
import './Blog.css'
import Post from '../../component/Post/Post';
import axo from 'axios';
class BlogPost extends Component{
    state={
        post:[],
        formBlogPost:{
            id:1,
            title:'',
            body:'',
            userId:1
        },
        isUpdate:false
    }
    getPostApi=()=>{
        axo.get('https://db-json-app.herokuapp.com/post?_sort=id&_order=desc')
        .then((res)=>{
            this.setState({
                post:res.data
            })
        })
    }
    componentDidMount(){
       this.getPostApi()
    }
    postDataApi=()=>{
        axo.post('https://db-json-app.herokuapp.com/post',this.state.formBlogPost)
        .then((res)=>{
            // console.log('Insert');
            this.getPostApi();
            this.handleFormData();
           
        },(err)=>{
            console.log('error',err);
        })
    }
    putDataAPI =()=>{
        axo.put('https://db-json-app.herokuapp.com/post/'+this.state.formBlogPost.id,this.state.formBlogPost)
        .then((res)=>{
            // console.log('update');
            this.getPostApi();
           this.handleFormData();
           
        },(err)=>{
            console.log('error',err);
        })
    }
    handleFormData=()=>{
        this.setState({
            formBlogPost:{
                id:1,
                title:'',
                body:'',
                userId:1
            },
            isUpdate:false
        })
    }
    handleRemove=(data)=>{
            axo.delete('https://db-json-app.herokuapp.com/post/'+data).then((res)=>{
                console.log(res)
            })
            
            this.getPostApi()
    }
    handleFromChange=(event)=>{
   
            let formBlogPostNew={...this.state.formBlogPost};
            let timeStamp = new Date().getTime();
            // console.log(timeStamp);
            if(!this.state.isUpdate){
                formBlogPostNew['id']=timeStamp;
            }
            
            formBlogPostNew[event.target.name]=event.target.value;
            this.setState({
                formBlogPost:formBlogPostNew
            })

    }

   handleUpdate=(data)=>{
    //    console.log(data);
       this.setState({
           formBlogPost:data,
           isUpdate:true
       })
   }
    handleSubmit=()=>{
        // console.log(this.state.formBlogPost);]
        if(this.state.isUpdate){
            this.putDataAPI();
        }else{
             this.postDataApi();
        }
       
    }
    render(){
        return(
            <Fragment>
             <p className="select-title">Data Blog</p>
             <div className="form-add-post">
                 <label htmlFor="title">Title</label>
                 <input type="text" name="title" placeholder="Add Title" value={this.state.formBlogPost.title} onChange={this.handleFromChange}/>
                 <label htmlFor="body">Blog Content</label>
                 <textarea name="body" id="body" cols="38" rows="10" value={this.state.formBlogPost.body} onChange={this.handleFromChange}></textarea>
                 <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
             </div>
               {
                   this.state.post.map(post=>{
                    return <Post key={post.id} data={post} remove={this.handleRemove}  update={this.handleUpdate}/>
                   })
               }
                
             </Fragment>
        )
    }

}
export default BlogPost;