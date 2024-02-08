import './App.css';
import LikeImage2 from './components/project-hoc/LikeImage2';
import LikePost2 from './components/project-hoc/LikePost2';
import LikeImage3 from './components/project-render/LikeImage3';
import LikePost3 from './components/project-render/LikePost3';
import RenderProps from './components/project-render/RenderProps';


function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost2/>
        <LikeImage2/>
      </div>
      <div>
        <h3>Some More Blogs</h3>
        <div className='buttons'>
          <RenderProps
               render={(count,handleCount)=>(<LikePost3 count={count} handleCount={handleCount}/>)}
               />

          <RenderProps
              render={(count, handleCount)=>(
                <LikeImage3 count={count}
                handleCount={handleCount}/>
              )} 
              />    
        </div>
      </div>
    </div>
  );
}

export default App;
