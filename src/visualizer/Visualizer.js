import React,{useState} from 'react';


var temp1='linearsearch';


function Visualizer() {

    const [mainArr, setMainArr] = useState([]);
    //const [resultmsg, setResultmsg] = useState('');
    const [searchValue, setSearchValue] = useState(250);
    const length=30;
    
    
const randomNumberFromRange = (low,high)=>{
    return Math.floor(Math.random()*(high-low)+low);
};
const getSortedArray = length=>{
    const arr=[];
   
    for(let i=0;i<length;i++){
     
          arr.push(randomNumberFromRange(100,400));
          if (document.getElementsByClassName('array-bar')[i] != null) {
            document.getElementsByClassName('array-bar')[
                i
            ].style.backgroundColor = '#5DADE2';
        }
         
    }
    arr.sort((a, b) => a - b);
    const temp = arr.map((item, idx) => ({ idx: idx, val: item }));
    setMainArr(temp);
};

const getNewArray = length=>{
    const arr=[];
   
    for(let i=0;i<length;i++){
        const item ={
            idx: i,
            val: randomNumberFromRange(100,400),
        };
        arr.push(item);
        if (document.getElementsByClassName('array-bar')[i] != null) {
            document.getElementsByClassName('array-bar')[
                i
            ].style.backgroundColor = '#5DADE2';
        }
       
    }
    setMainArr(arr);
    
   
};
window.onload = function exampleFunction() {
    getNewArray(length);
};
const binarySearch = value => {
  
    let lo = 0;
    let hi = length - 1;
    let animations = [];
    let found = false;
    

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);

        animations.push({
            i: lo,
            j: hi,
            mid: mid,
        });

        if (mainArr[mid].val === value) {
            found = true;
            break;
        } else if (mainArr[mid].val > value) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    if (!found) {
        animations.push({
            i: -1,
            j: -1,
            mid: -1,
        });
    }

    binaryHelper(animations, value);
};


const binaryHelper = (animations, searchValue) => {
    let bars = document.getElementsByClassName('array-bar');

    for (let k = 0; k < animations.length; k++) {
        if (animations[k].i === -1) {
            setTimeout(() => {
               

                bars[animations[k - 1].mid].style.backgroundColor = '#566573';
            }, k * 1000);
            break;
        }

        if (mainArr[animations[k].mid].val === searchValue) {
            console.log('inside');
            setTimeout(() => {
                bars[animations[k].mid].style.backgroundColor = '#76D7C4 ';

               
            }, (k + 1) * 1000);
        }
        let tempLen = length;
        setTimeout(() => {
            for (let m = 0; m < tempLen; m++) {
                if (m <= animations[k].j && m >= animations[k].i)
                    bars[m].style.backgroundColor = '#5DADE2';
                else bars[m].style.backgroundColor = '#566573';

                if (m === animations[k].mid) bars[m].style.backgroundColor = 'red';
            }
        }, k * 1000);
    }
};



const linearsearch = value =>{
     
    for(let i=0;i<length;i++){
        if(mainArr[i].val===value){
            console.log("found");
            setTimeout(() =>{
            document.getElementsByClassName('array-bar')[
                i
            ].style.backgroundColor='pink';
        },i*1000);
        }
        else{
            setTimeout(() => {
                document.getElementsByClassName('array-bar')[
                    i
                ].style.backgroundColor = 'red';
            }, i * 1000);

            setTimeout(() => {
                document.getElementsByClassName('array-bar')[
                    i
                ].style.backgroundColor = '#5DADE2';
            }, (i + 1) * 1000);
        }
           
    }
    
};
const setJob=temp1=>{
    console.log(temp1);
   
   temp1==='linearsearch'
        ?linearsearch(parseInt(searchValue))
        :binarySearch(parseInt(searchValue));
        
};
const noOfFunction=()=>
{                   
    getNewArray(length);
     temp1='linearsearch';
     console.log("from nooffuction"+temp1);

};
const noOfFunction2=()=>
{
    getSortedArray(length)
    temp1='binarysearch';
    console.log("from nooffuction2"+temp1);
    
    
};

    return (
        <div className="searching-container">
            <div className="array-container">
                <div className="result-box">
                    
                </div>
                {mainArr.map(item=>{
                    return(
                        <div 
                        className='array-bar'
                        key={item.idx}
                        style={{height: item.val,backgroundColor: '#5DADE2'}}>
                            
                            {item.val}
                            </div>
                    )
                })}

            </div>
            <div className="navbar">
        
            <button
            className='btn1'
            
            onClick={() =>
                noOfFunction()
               
            }
            >
                linearsearch
            </button>
            <button 
            className='btn2'
            onClick={()=>
                noOfFunction2()
            }
            >
                binarysearch
            </button>
            <button
            className='btn3'
            onClick={()=>
                setJob(temp1)
            }
            >start searching
                
            </button>
            <label>Search Element</label>
				<input
					placeholder='Enter value '
					type='number'
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
				></input>

           
            

            </div>
            <div className="nav-bar">

            </div>
            
        </div>
    )
}


export default Visualizer
