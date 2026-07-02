'use client'
import Image from "next/image";

export default function Home() {

  const scale = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B']

  const handleClickNote = (event) => {
    // console.log(event.currentTarget.classList[1])

    console.log(event.currentTarget.classList)
    console.log('=======> event.currentTarget.classList')

    const hasMajorSelected = event.currentTarget.classList.contains('majorSelected');
    const hasMinorSelected = event.currentTarget.classList.contains('minorSelected');

    if (hasMajorSelected) {
      try {
        const selectAntigo = document.querySelectorAll(".note");

        selectAntigo.forEach((select) => {
          select.classList.remove("majorSelected"),
            select.classList.remove("majorPart"),
            select.classList.remove("minorSelected"),
            select.classList.remove("minorPart")
        })

      } catch (error) {
        console.error(error)
      }

      event.currentTarget.classList.add('minorSelected')

      Scalefy({ note: event.currentTarget.classList[1], type: 'minor' })

    } else if (hasMinorSelected) {

      try {
        const selectAntigo = document.querySelectorAll(".note");

        selectAntigo.forEach((select) => {
          select.classList.remove("majorSelected"),
            select.classList.remove("majorPart"),
            select.classList.remove("minorSelected"),
            select.classList.remove("minorPart")
        })

      } catch (error) {
        console.error(error)
      }

    } else {

      try {
        const selectAntigo = document.querySelectorAll(".note");

        selectAntigo.forEach((select) => {
          select.classList.remove("majorSelected"),
            select.classList.remove("majorPart"),
            select.classList.remove("minorSelected"),
            select.classList.remove("minorPart")
        })

      } catch (error) {
        console.error(error)
      }

      event.currentTarget.classList.add('majorSelected')

      Scalefy({ note: event.currentTarget.classList[1], type: 'major' })

    }

  }

  function Scalefy({ note, type }) {
    // console.log(note)
    // console.log('Nota ' + note)

    const posicaoNaEscala = scale.indexOf(note)
    console.log(posicaoNaEscala)
    console.log('posicaoNaEscala')

    let Tonica = posicaoNaEscala
    let SuperTonica = 0
    let Mediante = 0
    let SubDominante = 0
    let Dominante = 0
    let SuperDominante = 0
    let Sensivel = 0

    let handlesuperTonica = 0
    let handleMediante = 0
    let handleSubDominante = 0
    let handleDominante = 0
    let handleSuperDominante = 0
    let handleSensivel = 0

    if (type == 'major') {
      handlesuperTonica = posicaoNaEscala + 2
      handleMediante = posicaoNaEscala + 4
      handleSubDominante = posicaoNaEscala + 5
      handleDominante = posicaoNaEscala + 7
      handleSuperDominante = posicaoNaEscala + 9
      handleSensivel = posicaoNaEscala + 11
    } else if (type == 'minor') {
      handlesuperTonica = posicaoNaEscala + 2
      handleMediante = posicaoNaEscala + 3
      handleSubDominante = posicaoNaEscala + 5
      handleDominante = posicaoNaEscala + 7
      handleSuperDominante = posicaoNaEscala + 8
      handleSensivel = posicaoNaEscala + 10
    }

    if (handlesuperTonica >= 24) {
      SuperTonica = handlesuperTonica - 24
    } else {
      if (handlesuperTonica >= 12) {
        SuperTonica = handlesuperTonica - 12
      } else {
        SuperTonica = handlesuperTonica
      }
    }

    if (handleMediante >= 24) {
      Mediante = handleMediante - 24
    } else {
      if (handleMediante >= 12) {
        Mediante = handleMediante - 12
      } else {
        Mediante = handleMediante
      }
    }

    if (handleSubDominante >= 24) {
      SubDominante = handleSubDominante - 24
    } else {
      if (handleSubDominante >= 12) {
        SubDominante = handleSubDominante - 12
      } else {
        SubDominante = handleSubDominante
      }
    }

    if (handleDominante >= 24) {
      Dominante = handleDominante - 24
    } else {
      if (handleDominante >= 12) {
        Dominante = handleDominante - 12
      } else {
        Dominante = handleDominante
      }
    }

    if (handleSuperDominante >= 24) {
      SuperDominante = handleSuperDominante - 24
    } else {
      if (handleSuperDominante >= 12) {
        SuperDominante = handleSuperDominante - 12
      } else {
        SuperDominante = handleSuperDominante
      }
    }

    if (handleSensivel >= 24) {
      Sensivel = handleSensivel - 24
    } else {
      if (handleSensivel >= 12) {
        Sensivel = handleSensivel - 12
      } else {
        Sensivel = handleSensivel
      }
    }

    console.log(scale[SuperTonica])
    console.log([
      scale[SuperTonica],
      scale[Mediante],
      scale[SubDominante],
      scale[Dominante],
      scale[SuperDominante],
      scale[Sensivel]
    ])

    const AllScaleNotes = document.querySelectorAll([
      '.' + scale[Tonica],
      '.' + scale[SuperTonica],
      '.' + scale[Mediante],
      '.' + scale[SubDominante],
      '.' + scale[Dominante],
      '.' + scale[SuperDominante],
      '.' + scale[Sensivel]
    ])

    if (type == 'major') {
      AllScaleNotes.forEach((select) => select.classList.add("majorPart"))
    } else if (type == 'minor') {
      AllScaleNotes.forEach((select) => select.classList.add("minorPart"))
    }

    console.log(AllScaleNotes)
    console.log('AllScaleNotes')

  }

  function selectInstrument(instrument) {

  }

  function tuneUp(musicString){

  }

  function tuneDown(musicString){

  }

  return (
    <div className="flex justify-center items-center relative">
      <div className="instrument-popup hidden">

      </div>

      <div className="head">
        <div className="string">
          <div className='tune 1th'>
            Nota <b className="E">E</b>
          </div>
          <div className="1th tuner">
            <div className="button" onClick={tuneDown}>◀</div>
            <div className="button" onClick={tuneUp}>▶</div>
          </div>
        </div>
        
      </div>

      <div className='neck'>
        <div className='fret'>
          <div onClick={handleClickNote} className='note E 1th'>E</div>
          <div onClick={handleClickNote} className='note B 2th'>B</div>
          <div onClick={handleClickNote} className='note G 3th'>G</div>
          <div onClick={handleClickNote} className='note D 4th'>D</div>
          <div onClick={handleClickNote} className='note A 5th'>A</div>
          <div onClick={handleClickNote} className='note E 6th'>E</div>
          <div onClick={handleClickNote} className='note B 7th'>B</div>
        </div>
        <div className='fret'>
          <div className='numb'>1</div>
          <div onClick={handleClickNote} className='note F  1th'>F</div>
          <div onClick={handleClickNote} className='note C  2th'>C</div>
          <div onClick={handleClickNote} className='note Gs 3th'>G#</div>
          <div onClick={handleClickNote} className='note Ds 4th'>D#</div>
          <div onClick={handleClickNote} className='note As 5th'>A#</div>
          <div onClick={handleClickNote} className='note F  6th'>F</div>
          <div onClick={handleClickNote} className='note C  7th'>C</div>
        </div>
        <div className='fret'>
          <div className='numb'>2</div>
          <div onClick={handleClickNote} className='note Fs 1th'>F#</div>
          <div onClick={handleClickNote} className='note Cs 2th'>C#</div>
          <div onClick={handleClickNote} className='note A  3th'>A</div>
          <div onClick={handleClickNote} className='note E  4th'>E</div>
          <div onClick={handleClickNote} className='note B  5th'>B</div>
          <div onClick={handleClickNote} className='note Fs 6th'>F#</div>
          <div onClick={handleClickNote} className='note Cs 7th'>C#</div>
        </div>
        <div className='fret'>
          <div className='numb'>3</div>
          <div onClick={handleClickNote} className='note G  1th'>G</div>
          <div onClick={handleClickNote} className='note D  2th'>D</div>
          <div onClick={handleClickNote} className='note As 3th'>A#</div>
          <div onClick={handleClickNote} className='note F  4th'>F</div>
          <div onClick={handleClickNote} className='note C  5th'>C</div>
          <div onClick={handleClickNote} className='note G  6th'>G</div>
          <div onClick={handleClickNote} className='note D  7th'>D</div>
        </div>
        <div className='fret'>
          <div className='numb'>4</div>
          <div onClick={handleClickNote} className='note Gs 1th'>G#</div>
          <div onClick={handleClickNote} className='note Ds 2th'>D#</div>
          <div onClick={handleClickNote} className='note B  3th'>B</div>
          <div onClick={handleClickNote} className='note Fs 4th'>F#</div>
          <div onClick={handleClickNote} className='note Cs 5th'>C#</div>
          <div onClick={handleClickNote} className='note Gs 6th'>G#</div>
          <div onClick={handleClickNote} className='note Ds 7th'>D#</div>
        </div>
        <div className='fret'>
          <div className='numb'>5</div>
          <div onClick={handleClickNote} className='note A 1th'>A</div>
          <div onClick={handleClickNote} className='note E 2th'>E</div>
          <div onClick={handleClickNote} className='note C 3th'>C</div>
          <div onClick={handleClickNote} className='note G 4th'>G</div>
          <div onClick={handleClickNote} className='note D 5th'>D</div>
          <div onClick={handleClickNote} className='note A 6th'>A</div>
          <div onClick={handleClickNote} className='note E 7th'>E</div>
        </div>
        <div className='fret'>
          <div className='numb'>6</div>
          <div onClick={handleClickNote} className='note As 1th'>A#</div>
          <div onClick={handleClickNote} className='note F  2th'>F</div>
          <div onClick={handleClickNote} className='note Cs 3th'>C#</div>
          <div onClick={handleClickNote} className='note Gs 4th'>G#</div>
          <div onClick={handleClickNote} className='note Ds 5th'>D#</div>
          <div onClick={handleClickNote} className='note As 6th'>A#</div>
          <div onClick={handleClickNote} className='note F  7th'>F</div>
        </div>
        <div className='fret'>
          <div className='numb'>7</div>
          <div onClick={handleClickNote} className='note B  1th'>B</div>
          <div onClick={handleClickNote} className='note Fs 2th'>F#</div>
          <div onClick={handleClickNote} className='note D  3th'>D</div>
          <div onClick={handleClickNote} className='note A  4th'>A</div>
          <div onClick={handleClickNote} className='note E  5th'>E</div>
          <div onClick={handleClickNote} className='note B  6th'>B</div>
          <div onClick={handleClickNote} className='note Fs 7th'>F#</div>
        </div>
        <div className='fret'>
          <div className='numb'>8</div>
          <div onClick={handleClickNote} className='note C  1th'>C</div>
          <div onClick={handleClickNote} className='note G  2th'>G</div>
          <div onClick={handleClickNote} className='note Ds 3th'>D#</div>
          <div onClick={handleClickNote} className='note As 4th'>A#</div>
          <div onClick={handleClickNote} className='note F  5th'>F</div>
          <div onClick={handleClickNote} className='note C  6th'>C</div>
          <div onClick={handleClickNote} className='note G  7th'>G</div>
        </div>
        <div className='fret'>
          <div className='numb'>9</div>
          <div onClick={handleClickNote} className='note Cs 1th'>C#</div>
          <div onClick={handleClickNote} className='note Gs 2th'>G#</div>
          <div onClick={handleClickNote} className='note E  3th'>E</div>
          <div onClick={handleClickNote} className='note B  4th'>B</div>
          <div onClick={handleClickNote} className='note Fs 5th'>F#</div>
          <div onClick={handleClickNote} className='note Cs 6th'>C#</div>
          <div onClick={handleClickNote} className='note Gs 7th'>G#</div>
        </div>
        <div className='fret'>
          <div className='numb'>10</div>
          <div onClick={handleClickNote} className='note D 1th'>D</div>
          <div onClick={handleClickNote} className='note A 2th'>A</div>
          <div onClick={handleClickNote} className='note F 3th'>F</div>
          <div onClick={handleClickNote} className='note C 4th'>C</div>
          <div onClick={handleClickNote} className='note G 5th'>G</div>
          <div onClick={handleClickNote} className='note D 6th'>D</div>
          <div onClick={handleClickNote} className='note A 7th'>A</div>
        </div>
        <div className='fret'>
          <div className='numb'>11</div>
          <div onClick={handleClickNote} className='note Ds 1th'>D#</div>
          <div onClick={handleClickNote} className='note As 2th'>A#</div>
          <div onClick={handleClickNote} className='note Fs 3th'>F#</div>
          <div onClick={handleClickNote} className='note Cs 4th'>C#</div>
          <div onClick={handleClickNote} className='note Gs 5th'>G#</div>
          <div onClick={handleClickNote} className='note Ds 6th'>D#</div>
          <div onClick={handleClickNote} className='note As 7th'>A#</div>
        </div>
        <div className='fret'>
          <div className='numb'>12</div>
          <div onClick={handleClickNote} className='note E 1th'>E</div>
          <div onClick={handleClickNote} className='note B 2th'>B</div>
          <div onClick={handleClickNote} className='note G 3th'>G</div>
          <div onClick={handleClickNote} className='note D 4th'>D</div>
          <div onClick={handleClickNote} className='note A 5th'>A</div>
          <div onClick={handleClickNote} className='note E 6th'>E</div>
          <div onClick={handleClickNote} className='note B 7th'>B</div>
        </div>
        <div className='fret'>
          <div className='numb'>13</div>
          <div onClick={handleClickNote} className='note F  1th'>F</div>
          <div onClick={handleClickNote} className='note C  2th'>C</div>
          <div onClick={handleClickNote} className='note Gs 3th'>G#</div>
          <div onClick={handleClickNote} className='note Ds 4th'>D#</div>
          <div onClick={handleClickNote} className='note As 5th'>A#</div>
          <div onClick={handleClickNote} className='note F  6th'>F</div>
          <div onClick={handleClickNote} className='note C  7th'>C</div>
        </div>
        <div className='fret'>
          <div className='numb'>14</div>
          <div onClick={handleClickNote} className='note Fs 1th'>F#</div>
          <div onClick={handleClickNote} className='note Cs 2th'>C#</div>
          <div onClick={handleClickNote} className='note A  3th'>A</div>
          <div onClick={handleClickNote} className='note E  4th'>E</div>
          <div onClick={handleClickNote} className='note B  5th'>B</div>
          <div onClick={handleClickNote} className='note Fs 6th'>F#</div>
          <div onClick={handleClickNote} className='note Cs 7th'>C#</div>
        </div>
        <div className='fret'>
          <div className='numb'>15</div>
          <div onClick={handleClickNote} className='note G  1th'>G</div>
          <div onClick={handleClickNote} className='note D  2th'>D</div>
          <div onClick={handleClickNote} className='note As 3th'>A#</div>
          <div onClick={handleClickNote} className='note F  4th'>F</div>
          <div onClick={handleClickNote} className='note C  5th'>C</div>
          <div onClick={handleClickNote} className='note G  6th'>G</div>
          <div onClick={handleClickNote} className='note D  7th'>D</div>
        </div>
      </div>
    </div>
  );
}
