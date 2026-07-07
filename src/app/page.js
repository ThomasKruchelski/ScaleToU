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
    const stringNotes = document.querySelectorAll(`.${musicString}`)
    console.log(stringNotes)

    stringNotes.forEach((select =>{
      select.classList.forEach((cssClass) => {
        if(cssClass == 'A'){
          select.classList.add('pivotAs')
          select.classList.remove('A')
        } else if(cssClass == 'As'){
          select.classList.add('pivotB')
          select.classList.remove('As')
          } else if(cssClass == 'B'){
          select.classList.add('pivotC')
          select.classList.remove('B')
          } else if(cssClass == 'C'){
          select.classList.add('pivotCs')
          select.classList.remove('C')
          } else if(cssClass == 'Cs'){
          select.classList.add('pivotD')
          select.classList.remove('Cs')
          } else if(cssClass == 'D'){
          select.classList.add('pivotDs')
          select.classList.remove('D')
          } else if(cssClass == 'Ds'){
          select.classList.add('pivotE')
          select.classList.remove('Ds')
          } else if(cssClass == 'E'){
          select.classList.add('pivotF')
          select.classList.remove('E')
          } else if(cssClass == 'F'){
          select.classList.add('pivotFs')
          select.classList.remove('F')
          } else if(cssClass == 'Fs'){
          select.classList.add('pivotG')
          select.classList.remove('Fs')
          } else if(cssClass == 'G'){
          select.classList.add('pivotGs')
          select.classList.remove('G')
          } else if(cssClass == 'Gs'){
          select.classList.add('pivotA')
          select.classList.remove('Gs')
          }
      })
    }))
  }

  function tuneDown(musicString){

  }

  return (
    <div className="flex justify-center items-center relative">
      <div className="instrument-popup hidden">

      </div>

      <div className="head">
        <div className="string">
          <div className='tune th-1'>
            Nota <b className="E">E</b>
          </div>
          <div className="th-1 tuner">
            <div className="button" onClick={() => tuneDown('th-1')}>◀</div>
            <div className="button" onClick={() => tuneUp('th-1')}>▶</div>
          </div>
        </div>
        
      </div>

      <div className='neck'>
        <div className='fret'>
          <div onClick={handleClickNote} className='note E th-1'>E</div>
          <div onClick={handleClickNote} className='note B th-2'>B</div>
          <div onClick={handleClickNote} className='note G th-3'>G</div>
          <div onClick={handleClickNote} className='note D th-4'>D</div>
          <div onClick={handleClickNote} className='note A th-5'>A</div>
          <div onClick={handleClickNote} className='note E th-6'>E</div>
          <div onClick={handleClickNote} className='note B th-7'>B</div>
        </div>
        <div className='fret'>
          <div className='numb'>1</div>
          <div onClick={handleClickNote} className='note F  th-1'>F</div>
          <div onClick={handleClickNote} className='note C  th-2'>C</div>
          <div onClick={handleClickNote} className='note Gs th-3'>G#</div>
          <div onClick={handleClickNote} className='note Ds th-4'>D#</div>
          <div onClick={handleClickNote} className='note As th-5'>A#</div>
          <div onClick={handleClickNote} className='note F  th-6'>F</div>
          <div onClick={handleClickNote} className='note C  th-7'>C</div>
        </div>
        <div className='fret'>
          <div className='numb'>2</div>
          <div onClick={handleClickNote} className='note Fs th-1'>F#</div>
          <div onClick={handleClickNote} className='note Cs th-2'>C#</div>
          <div onClick={handleClickNote} className='note A  th-3'>A</div>
          <div onClick={handleClickNote} className='note E  th-4'>E</div>
          <div onClick={handleClickNote} className='note B  th-5'>B</div>
          <div onClick={handleClickNote} className='note Fs th-6'>F#</div>
          <div onClick={handleClickNote} className='note Cs th-7'>C#</div>
        </div>
        <div className='fret'>
          <div className='numb'>3</div>
          <div onClick={handleClickNote} className='note G  th-1'>G</div>
          <div onClick={handleClickNote} className='note D  th-2'>D</div>
          <div onClick={handleClickNote} className='note As th-3'>A#</div>
          <div onClick={handleClickNote} className='note F  th-4'>F</div>
          <div onClick={handleClickNote} className='note C  th-5'>C</div>
          <div onClick={handleClickNote} className='note G  th-6'>G</div>
          <div onClick={handleClickNote} className='note D  th-7'>D</div>
        </div>
        <div className='fret'>
          <div className='numb'>4</div>
          <div onClick={handleClickNote} className='note Gs th-1'>G#</div>
          <div onClick={handleClickNote} className='note Ds th-2'>D#</div>
          <div onClick={handleClickNote} className='note B  th-3'>B</div>
          <div onClick={handleClickNote} className='note Fs th-4'>F#</div>
          <div onClick={handleClickNote} className='note Cs th-5'>C#</div>
          <div onClick={handleClickNote} className='note Gs th-6'>G#</div>
          <div onClick={handleClickNote} className='note Ds th-7'>D#</div>
        </div>
        <div className='fret'>
          <div className='numb'>5</div>
          <div onClick={handleClickNote} className='note A th-1'>A</div>
          <div onClick={handleClickNote} className='note E th-2'>E</div>
          <div onClick={handleClickNote} className='note C th-3'>C</div>
          <div onClick={handleClickNote} className='note G th-4'>G</div>
          <div onClick={handleClickNote} className='note D th-5'>D</div>
          <div onClick={handleClickNote} className='note A th-6'>A</div>
          <div onClick={handleClickNote} className='note E th-7'>E</div>
        </div>
        <div className='fret'>
          <div className='numb'>6</div>
          <div onClick={handleClickNote} className='note As th-1'>A#</div>
          <div onClick={handleClickNote} className='note F  th-2'>F</div>
          <div onClick={handleClickNote} className='note Cs th-3'>C#</div>
          <div onClick={handleClickNote} className='note Gs th-4'>G#</div>
          <div onClick={handleClickNote} className='note Ds th-5'>D#</div>
          <div onClick={handleClickNote} className='note As th-6'>A#</div>
          <div onClick={handleClickNote} className='note F  th-7'>F</div>
        </div>
        <div className='fret'>
          <div className='numb'>7</div>
          <div onClick={handleClickNote} className='note B  th-1'>B</div>
          <div onClick={handleClickNote} className='note Fs th-2'>F#</div>
          <div onClick={handleClickNote} className='note D  th-3'>D</div>
          <div onClick={handleClickNote} className='note A  th-4'>A</div>
          <div onClick={handleClickNote} className='note E  th-5'>E</div>
          <div onClick={handleClickNote} className='note B  th-6'>B</div>
          <div onClick={handleClickNote} className='note Fs th-7'>F#</div>
        </div>
        <div className='fret'>
          <div className='numb'>8</div>
          <div onClick={handleClickNote} className='note C  th-1'>C</div>
          <div onClick={handleClickNote} className='note G  th-2'>G</div>
          <div onClick={handleClickNote} className='note Ds th-3'>D#</div>
          <div onClick={handleClickNote} className='note As th-4'>A#</div>
          <div onClick={handleClickNote} className='note F  th-5'>F</div>
          <div onClick={handleClickNote} className='note C  th-6'>C</div>
          <div onClick={handleClickNote} className='note G  th-7'>G</div>
        </div>
        <div className='fret'>
          <div className='numb'>9</div>
          <div onClick={handleClickNote} className='note Cs th-1'>C#</div>
          <div onClick={handleClickNote} className='note Gs th-2'>G#</div>
          <div onClick={handleClickNote} className='note E  th-3'>E</div>
          <div onClick={handleClickNote} className='note B  th-4'>B</div>
          <div onClick={handleClickNote} className='note Fs th-5'>F#</div>
          <div onClick={handleClickNote} className='note Cs th-6'>C#</div>
          <div onClick={handleClickNote} className='note Gs th-7'>G#</div>
        </div>
        <div className='fret'>
          <div className='numb'>10</div>
          <div onClick={handleClickNote} className='note D th-1'>D</div>
          <div onClick={handleClickNote} className='note A th-2'>A</div>
          <div onClick={handleClickNote} className='note F th-3'>F</div>
          <div onClick={handleClickNote} className='note C th-4'>C</div>
          <div onClick={handleClickNote} className='note G th-5'>G</div>
          <div onClick={handleClickNote} className='note D th-6'>D</div>
          <div onClick={handleClickNote} className='note A th-7'>A</div>
        </div>
        <div className='fret'>
          <div className='numb'>11</div>
          <div onClick={handleClickNote} className='note Ds th-1'>D#</div>
          <div onClick={handleClickNote} className='note As th-2'>A#</div>
          <div onClick={handleClickNote} className='note Fs th-3'>F#</div>
          <div onClick={handleClickNote} className='note Cs th-4'>C#</div>
          <div onClick={handleClickNote} className='note Gs th-5'>G#</div>
          <div onClick={handleClickNote} className='note Ds th-6'>D#</div>
          <div onClick={handleClickNote} className='note As th-7'>A#</div>
        </div>
        <div className='fret'>
          <div className='numb'>12</div>
          <div onClick={handleClickNote} className='note E th-1'>E</div>
          <div onClick={handleClickNote} className='note B th-2'>B</div>
          <div onClick={handleClickNote} className='note G th-3'>G</div>
          <div onClick={handleClickNote} className='note D th-4'>D</div>
          <div onClick={handleClickNote} className='note A th-5'>A</div>
          <div onClick={handleClickNote} className='note E th-6'>E</div>
          <div onClick={handleClickNote} className='note B th-7'>B</div>
        </div>
        <div className='fret'>
          <div className='numb'>13</div>
          <div onClick={handleClickNote} className='note F  th-1'>F</div>
          <div onClick={handleClickNote} className='note C  th-2'>C</div>
          <div onClick={handleClickNote} className='note Gs th-3'>G#</div>
          <div onClick={handleClickNote} className='note Ds th-4'>D#</div>
          <div onClick={handleClickNote} className='note As th-5'>A#</div>
          <div onClick={handleClickNote} className='note F  th-6'>F</div>
          <div onClick={handleClickNote} className='note C  th-7'>C</div>
        </div>
        <div className='fret'>
          <div className='numb'>14</div>
          <div onClick={handleClickNote} className='note Fs th-1'>F#</div>
          <div onClick={handleClickNote} className='note Cs th-2'>C#</div>
          <div onClick={handleClickNote} className='note A  th-3'>A</div>
          <div onClick={handleClickNote} className='note E  th-4'>E</div>
          <div onClick={handleClickNote} className='note B  th-5'>B</div>
          <div onClick={handleClickNote} className='note Fs th-6'>F#</div>
          <div onClick={handleClickNote} className='note Cs th-7'>C#</div>
        </div>
        <div className='fret'>
          <div className='numb'>15</div>
          <div onClick={handleClickNote} className='note G  th-1'>G</div>
          <div onClick={handleClickNote} className='note D  th-2'>D</div>
          <div onClick={handleClickNote} className='note As th-3'>A#</div>
          <div onClick={handleClickNote} className='note F  th-4'>F</div>
          <div onClick={handleClickNote} className='note C  th-5'>C</div>
          <div onClick={handleClickNote} className='note G  th-6'>G</div>
          <div onClick={handleClickNote} className='note D  th-7'>D</div>
        </div>
      </div>
    </div>
  );
}
