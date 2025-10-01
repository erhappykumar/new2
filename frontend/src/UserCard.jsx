// Card.jsx
import React from "react";
import A from "./A";
import { useState } from "react";
// const usercolor=[
//   "aqua",'aquamarine','bisque','blanchedalmond','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate',
//   'coral','cornflowerblue','cornsilk','crimson','darkgoldenrod','darkgreen','darkkhaki','darkorange','darksalmon','darkseagreen',
//   'darkslateblue','darkslategray','darkturquoise','deeppink','deepskyblue','dodgerblue','firebrick','forestgreen','fuchsia','gold','goldenrod',
//   'greenyellow','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lawngreen','lemonchiffon',
//   'lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgreen','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray',
//   'lightsteelblue','lightyellow','limegreen','linen','magenta','mediumaquamarine','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue',
//   'mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','oldlace','olivedrab',
//   'orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum',
//   'powderblue','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','skyblue',
//   'slateblue','slategray','springgreen','steelblue','tan','thistle','tomato','turquoise','violet','wheat',
//   'yellowgreen'
// ]
  
// const cart=['Full Name','City','Mobile Number','Email','Complete Address',]


const UserCard = ({ fullName,city,Mobile_Number,Email,Complete_Address, index ,id}) => {
  const cart=['Full Name','City','Mobile Number','Email','Complete Address',]
  const usercolor=[
  "aqua",'aquamarine','bisque','blanchedalmond','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate',
  'coral','cornflowerblue','cornsilk','crimson','darkgoldenrod','darkgreen','darkkhaki','darkorange','darksalmon','darkseagreen',
  'darkslateblue','darkslategray','darkturquoise','deeppink','deepskyblue','dodgerblue','firebrick','forestgreen','fuchsia','gold','goldenrod',
  'greenyellow','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lawngreen','lemonchiffon',
  'lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgreen','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray',
  'lightsteelblue','lightyellow','limegreen','linen','magenta','mediumaquamarine','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue',
  'mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','oldlace','olivedrab',
  'orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum',
  'powderblue','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','skyblue',
  'slateblue','slategray','springgreen','steelblue','tan','thistle','tomato','turquoise','violet','wheat',
  'yellowgreen'
]

const [colorify,setColorify]=useState(0)

function randomcolor(){let x= usercolor[Math.min((Math.floor(new Date().getSeconds())+Math.floor(Math.random() * usercolor.length)),usercolor.length)];console.log(x);return x}

/////////////////////////////

 let style1=`
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        color:${randomcolor()};
       background:${randomcolor()};
       
     box-shadow:6px 6px 10px 12px ${randomcolor()};
     
     
     `;
        
      const style2=`
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        color:black;
       
       background:${usercolor[index]};
    
     
     
     `;





const hoverhandal=  async(e)=>{
 setColorify(Math.random());
  //console.log(e.currentTarget.className)

e.currentTarget.style=await(style1)
//`6px 6px 10px 12px ${usercolor[index]}`

}
const onMouseLeavehandal=(e)=>{

  //console.log(e.currentTarget.className)

e.currentTarget.style=style2
//`6px 6px 10px 12px ${usercolor[index]}`

}
  
  return (
    <div className={`card ${index}`}
      key={index}
      id={id}
      onMouseOver={hoverhandal}
      onMouseLeave={onMouseLeavehandal}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        color:"black",
       
        background:usercolor[index],
        
        // :hover { color: "red" }
      }
    
    }
      
    >
        
     <p><strong>{cart[0]}:</strong> {fullName}</p>
     <p><strong>{cart[1]}:</strong> {city}</p>
      <p><strong>{cart[2]}:</strong> {Mobile_Number}</p>
     <p><strong>{cart[3]}:</strong> {Email}</p>
     <p><strong>{cart[4]}:</strong> {Complete_Address}</p>



    </div>
  );
};

// city: "Delhi";
// complete_address: "House 14B, Sector 18, Block C, Dwarka, New Delhi - 110075";
// email: "priya.sharma@example.com";
// full_name: "Priya Sharma";
// mobile_number: 8123456789;
// password: "PriyaSharma@123";
// username: "PriyaSharma";
// _id: "68d723fc0fdf8284a5eef91f";

export default UserCard;
