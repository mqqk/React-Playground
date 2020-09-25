import React from 'react'
import LanguageContext from './LanguageContext'



 export default function LangControls(props) {
  return (
        <LanguageContext.Consumer>
      {(value) => {
        
        return (
            <>
           
                 <button
                   disabled={value.lang === 'en-GB'}
                   onClick={() => props.onSetLang('en-GB')}
                  >
                    British{' '}
                    <span role='img' aria-label='en-GB'>🇬🇧</span>
                  </button>
                  {' '}
            
                 <button
                   disabled={value.lang === 'en-US'}
                   onClick={() => props.onSetLang('en-US')}>
                    American{' '}
                    <span role='img' aria-label='en-US'>🇺🇸</span>
                  </button>
                  {' '}
                 
                 <button
                   disabled={value.lang === 'ko'}
                   onClick={() => props.onSetLang('ko')}>
                    Korean{' '}
                    <span role='img' aria-label='ko'>🇰🇷</span>
                  </button>
                  <button
                    disabled={value.lang==='klingon'}
                    onClick={() => props.onSetLang('klingon')}>
                      Klingon{' '}
                      <span role='img' aria-label='klingon'>🖖</span>
                    </button>
            </>
        )
      }}
    </LanguageContext.Consumer>
  );
}