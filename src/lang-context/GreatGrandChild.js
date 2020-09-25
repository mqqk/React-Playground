import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext'

class GreatGrandChild extends Component {
    static contextType = LanguageContext;
  render() {
    const copy = languageSpecificCopy[this.context.lang] || {}

    console.log(this.context);
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
        <button
                    // disabled={value.lang==='klingon'}
                    onClick={() => this.context.setLang('klingon')}
                    >
                      Klingon{' '}
                      <span role='img' aria-label='klingon'>🖖</span>
                    </button>
      </section>
    )
  }
}

export default GreatGrandChild