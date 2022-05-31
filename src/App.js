import logo from './logo.svg';
import Header from './components/Header';
import Block from './components/Block';
import Chartbar from './components/Chartbar';
import Baitap1 from './components/Baitap1/index';
import Baitap2 from './components/Baitap2/index';
import Socialnetwork from './components/Socialnetwork';
import './App.css';


// Ví dụ header
// function Header(props) {
//   return (
//     <div>
//       <h1 style={{fontSize: props.size ,color: props.color}}>{props.text}</h1>
//     </div>

//   );
// }

// Ví dụ 3 khối nhưng chỉ cần viết 1 khối

// function Block(props) {
//   return (
//     <div style={{marginInline: 8}}>
//       <h2 style={{fontSize: 18, color: 'pink'}}>{props.title}</h2>
//       <p style={{fontSize: 14}}>{props.content}</p>
//     </div>
//   );
// }



function App() {
  return (
    <div>
      {/* ví dụ phần header */}
      <Header text="Google" color='green' size={20}></Header>
      <Header text="Aptech" color='red' size={24}></Header>  
        {/* như vậy text ở đây là 1 props, size và color là 1 prop */}
        
      {/* ví dụ phần Block */}
      <div style={{display: 'flex'}}>
        <Block 
        title='Declarative'
        content='The sentence is generally defined as a word or a group of words that expresses a thorough idea by giving a statement/order, or asking a question, or exclaiming. Example: He is a good boy (statement), Is he a good boy? (question), What a nice weather!'></Block>

        <Block 
        title='Componen-based'
        content='The sentence is generally defined as a word or a group of words that expresses a thorough idea by giving a statement/order, or asking a question, or exclaiming. Example: He is a good boy (statement), Is he a good boy? (question), What a nice weather!'></Block>

        <Block 
        title='Terra-Luna'
        content='The sentence is generally defined as a word or a group of words that expresses a thorough idea by giving a statement/order, or asking a question, or exclaiming. Example: He is a good boy (statement), Is he a good boy? (question), What a nice weather!'></Block>
      </div>

      <Chartbar text='Bandwidth' color1='red' color2='orange' percentage={20}/>
      <Chartbar text='Storage' color1='green' color2='blue' percentage={50}/>
      <Chartbar text='Users' color1='pink' color2='violet' percentage={70}/>
      <Chartbar text='Visitors' color1='yellow' color2='orange' percentage={80}/>
      <Chartbar text='Email' color1='red' color2='orange' percentage={90}/>
      <Chartbar text='Basic' color1='green' color2='blue' percentage={40} />
      <Chartbar text='Others' color1='red' color2='orange' percentage={55}/>

      <hr/>

      <Baitap1 text='Clothing & Apparel' text1='Accessories' text2='Bags' text3="Kid's Fashion" text4='Mens' color='gray'/>

      <hr/>

      <Baitap2 text='YOUNG SHOP' text1='Samsung UHD TV 24inch' text2="*****" color='#4991E2' color2='#FFB402' size={25} price={599}/>

      <hr/>
      
      <Socialnetwork iconName='bx bxl-facebook' text='Facebook' color='green' total='5,000,000' unitName='Likes'/>
      <Socialnetwork iconName='bx bxl-twitter' text='Twitter' color='green' total='40,000' unitName='Tweets'/>
      <Socialnetwork iconName='bx bxl-google-plus' text='Google' color='red' total='4,600,000' unitName='Plus'/>
      <Socialnetwork iconName='bx bxl-pinterest' text='Pinterest' color='red' total='3,400,000' unitName='Pins'/>
      
      
    </div>
  );
}

export default App;
