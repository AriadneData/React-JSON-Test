import React, {useState} from 'react';

export const MyCustomCheckbox = (props) => {

  const [chkboxvalue, setChkboxValue] = useState(false);

  // console.log(props);

  const handleClick = () => {
    setChkboxValue(!chkboxvalue);
  }

  return (
      <div>
          <input type="checkbox" id="custom"  
              onClick={handleClick} value={chkboxvalue}/>
          <label htmlFor="custom"> Some checkbox label </label>
          <br></br>
          {chkboxvalue &&
              <div> 
                  <br />
                  <textarea name="comment" row="1" cols="30" />
            </div>
          }
      </div>
      );
};