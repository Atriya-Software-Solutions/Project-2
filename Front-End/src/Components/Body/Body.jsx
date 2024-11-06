import React from 'react'
import './Body.css'
import photo1 from '../../assets/Photo1.png'

const Body = () => {
  return (
    <div className='body-div'>
      <div className="body-div2">
      <div className="grey-box"></div>
      <div className="message1">अध्यक्षको सन्देश</div>
      
      
        <div className="wrapper">
          <div className="introduction-photo"><img src={photo1} alt="" /></div>
            <div className="text-box">
              <h2>अध्यक्षको सन्देश</h2>
              <p>नेपाल देशको उन्नति अनि नेपाली जनताको समग्र प्रगति नेपाली  मुल अभिष्ट हो l  विचार, कैयन सहिदको बलिदान, हजारौं योद्धाको समर्पण र लाखौं सदस्यको अनवरत यात्रा हाम्रो त्यही अभिष्टमा केन्द्रित र लक्ष्यित छ l
 संग विभिन्न कालखण्डमा यो  र समग्र देशको नेतृत्व गर्नुभयो l उहाँहरुको नेतृत्वमा मुलुकले हासिल गरेको राजनैतिक र आर्थिक उपलब्धिको जगमा हामीले नेपाल देशको समृद्धि र खुसी प्राप्तिको यात्रालाई अघि बढाउनु छ l
 सिद्धान्त एवं आदर्शप्रति अटुट आस्था, दृढ़ अडान र निरन्तर अभियानमा नेपाली सदैब अविचलित रहनेछ </p>
 <p>डिल्लीराम पौडेल</p>
 <p>अध्यक्ष, आर्थर सरादिखोला पौडेल सेवा समाज ,पोखरा</p>

            </div>
        </div>
        
      <div className="today">हामी आज</div></div>

      </div>
      
    
  )
}

export default Body