'use client'
import Image from "next/image";
import removePivot from "@/components/removePivot";

export default function Home() {

  const scale = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B']

  const handleClickNote = (event) => {
    // console.log(event.currentTarget.classList[1])

    // console.log(event.currentTarget.classList)
    // console.log('=======> event.currentTarget.classList')

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

      Scalefy({ note: event.currentTarget.classList[2], type: 'major' })

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

    // console.log(scale[SuperTonica])
    console.log([
      scale[Tonica],
      scale[SuperTonica],
      scale[Mediante],
      scale[SubDominante],
      scale[Dominante],
      scale[SuperDominante],
      scale[Sensivel]
    ])
    console.log("Escala selecionada")

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

    // console.log(AllScaleNotes)
    // console.log('AllScaleNotes')

  }

  function selectInstrument(instrument) {

  }

  function tuneUp(musicString){
    const stringNotes = document.querySelectorAll(`.${musicString}`)
    // console.log(stringNotes)

    stringNotes.forEach((select =>{
      select.classList.forEach((cssClass) => {
        if(cssClass == 'A'){
          select.classList.add('pivotAs')
          select.classList.remove('A')
          select.innerHTML= "A#"
        } else if(cssClass == 'As'){
          select.classList.add('pivotB')
          select.classList.remove('As')
          select.innerHTML= "B"
        } else if(cssClass == 'B'){
          select.classList.add('pivotC')
          select.classList.remove('B')
          select.innerHTML= "C"
        } else if(cssClass == 'C'){
          select.classList.add('pivotCs')
          select.classList.remove('C')
          select.innerHTML= "C#"
        } else if(cssClass == 'Cs'){
          select.classList.add('pivotD')
          select.classList.remove('Cs')
          select.innerHTML= "D"
        } else if(cssClass == 'D'){
          select.classList.add('pivotDs')
          select.classList.remove('D')
          select.innerHTML= "D#"
        } else if(cssClass == 'Ds'){
          select.classList.add('pivotE')
          select.classList.remove('Ds')
          select.innerHTML= "E"
        } else if(cssClass == 'E'){
          select.classList.add('pivotF')
          select.classList.remove('E')
          select.innerHTML= "F"
        } else if(cssClass == 'F'){
          select.classList.add('pivotFs')
          select.classList.remove('F')
          select.innerHTML= "F#"
        } else if(cssClass == 'Fs'){
          select.classList.add('pivotG')
          select.classList.remove('Fs')
          select.innerHTML= "G"
        } else if(cssClass == 'G'){
          select.classList.add('pivotGs')
          select.classList.remove('G')
          select.innerHTML= "G#"
        } else if(cssClass == 'Gs'){
          select.classList.add('pivotA')
          select.classList.remove('Gs')
          select.innerHTML= "A"
        }
      })
    }))

    removePivot();

  }

  function tuneDown(musicString){
    const stringNotes = document.querySelectorAll(`.${musicString}`)
    // console.log(stringNotes)

    stringNotes.forEach((select =>{
      select.classList.forEach((cssClass) => {
        if(cssClass == 'A'){
          select.classList.add('pivotGs')
          select.classList.remove('A')
          select.innerHTML= "G#"
        } else if(cssClass == 'As'){
          select.classList.add('pivotA')
          select.classList.remove('As')
          select.innerHTML= "A"
        } else if(cssClass == 'B'){
          select.classList.add('pivotAs')
          select.classList.remove('B')
          select.innerHTML= "A#"
        } else if(cssClass == 'C'){
          select.classList.add('pivotB')
          select.classList.remove('C')
          select.innerHTML= "B"
        } else if(cssClass == 'Cs'){
          select.classList.add('pivotC')
          select.classList.remove('Cs')
          select.innerHTML= "C"
        } else if(cssClass == 'D'){
          select.classList.add('pivotCs')
          select.classList.remove('D')
          select.innerHTML= "C#"
        } else if(cssClass == 'Ds'){
          select.classList.add('pivotD')
          select.classList.remove('Ds')
          select.innerHTML= "D"
        } else if(cssClass == 'E'){
          select.classList.add('pivotDs')
          select.classList.remove('E')
          select.innerHTML= "D#"
        } else if(cssClass == 'F'){
          select.classList.add('pivotE')
          select.classList.remove('F')
          select.innerHTML= "E"
        } else if(cssClass == 'Fs'){
          select.classList.add('pivotF')
          select.classList.remove('Fs')
          select.innerHTML= "F"
        } else if(cssClass == 'G'){
          select.classList.add('pivotFs')
          select.classList.remove('G')
          select.innerHTML= "F#"
        } else if(cssClass == 'Gs'){
          select.classList.add('pivotG')
          select.classList.remove('Gs')
          select.innerHTML= "G"
        }
      })
    }))

    removePivot();
  }

  return (
    <div className="flex justify-center items-center relative">
      <div className="instrument-popup hidden">

      </div>

      <div className="head">
        <div className="string">
          <div className='tune'>
            Nota <b className="th-1 E">E</b>
          </div>
          <div className="tuner">
            <div className="button" onClick={() => tuneDown('th-1')}>◀</div>
            <div className="button" onClick={() => tuneUp('th-1')}>▶</div>
          </div>
        </div>
        <div className="string">
          <div className='tune'>
            Nota <b className="th-2 B">B</b>
          </div>
          <div className="tuner">
            <div className="button" onClick={() => tuneDown('th-2')}>◀</div>
            <div className="button" onClick={() => tuneUp('th-2')}>▶</div>
          </div>
        </div>
        <div className="string">
          <div className='tune'>
            Nota <b className="th-3 G">G</b>
          </div>
          <div className="tuner">
            <div className="button" onClick={() => tuneDown('th-3')}>◀</div>
            <div className="button" onClick={() => tuneUp('th-3')}>▶</div>
          </div>
        </div>
        <div className="string">
          <div className='tune'>
            Nota <b className="th-4 D">D</b>
          </div>
          <div className="tuner">
            <div className="button" onClick={() => tuneDown('th-4')}>◀</div>
            <div className="button" onClick={() => tuneUp('th-4')}>▶</div>
          </div>
        </div>
        <div className="string">
          <div className='tune'>
            Nota <b className="th-5 A">A</b>
          </div>
          <div className="tuner">
            <div className="button" onClick={() => tuneDown('th-5')}>◀</div>
            <div className="button" onClick={() => tuneUp('th-5')}>▶</div>
          </div>
        </div>
        <div className="string">
          <div className='tune'>
            Nota <b className="th-6 E">E</b>
          </div>
          <div className="tuner">
            <div className="button" onClick={() => tuneDown('th-6')}>◀</div>
            <div className="button" onClick={() => tuneUp('th-6')}>▶</div>
          </div>
        </div>
        <div className="string">
          <div className='tune'>
            Nota <b className="th-7 B">B</b>
          </div>
          <div className="tuner">
            <div className="button" onClick={() => tuneDown('th-7')}>◀</div>
            <div className="button" onClick={() => tuneUp('th-7')}>▶</div>
          </div>
        </div>
        
      </div>

      <div className='neck'>
        <div className='fret'>
          <div onClick={handleClickNote} className='note th-1 E '>E</div>
          <div onClick={handleClickNote} className='note th-2 B '>B</div>
          <div onClick={handleClickNote} className='note th-3 G '>G</div>
          <div onClick={handleClickNote} className='note th-4 D '>D</div>
          <div onClick={handleClickNote} className='note th-5 A '>A</div>
          <div onClick={handleClickNote} className='note th-6 E '>E</div>
          <div onClick={handleClickNote} className='note th-7 B '>B</div>
        </div>
        <div className='fret'>
          <div className='numb'>1</div>
          <div onClick={handleClickNote} className='note th-1 F  '>F</div>
          <div onClick={handleClickNote} className='note th-2 C  '>C</div>
          <div onClick={handleClickNote} className='note th-3 Gs '>G#</div>
          <div onClick={handleClickNote} className='note th-4 Ds '>D#</div>
          <div onClick={handleClickNote} className='note th-5 As '>A#</div>
          <div onClick={handleClickNote} className='note th-6 F  '>F</div>
          <div onClick={handleClickNote} className='note th-7 C  '>C</div>
        </div>
        <div className='fret'>
          <div className='numb'>2</div>
          <div onClick={handleClickNote} className='note th-1 Fs '>F#</div>
          <div onClick={handleClickNote} className='note th-2 Cs '>C#</div>
          <div onClick={handleClickNote} className='note th-3 A  '>A</div>
          <div onClick={handleClickNote} className='note th-4 E  '>E</div>
          <div onClick={handleClickNote} className='note th-5 B  '>B</div>
          <div onClick={handleClickNote} className='note th-6 Fs '>F#</div>
          <div onClick={handleClickNote} className='note th-7 Cs '>C#</div>
        </div>
        <div className='fret'>
          <div className='numb'>3</div>
          <div onClick={handleClickNote} className='note th-1 G  '>G</div>
          <div onClick={handleClickNote} className='note th-2 D  '>D</div>
          <div onClick={handleClickNote} className='note th-3 As '>A#</div>
          <div onClick={handleClickNote} className='note th-4 F  '>F</div>
          <div onClick={handleClickNote} className='note th-5 C  '>C</div>
          <div onClick={handleClickNote} className='note th-6 G  '>G</div>
          <div onClick={handleClickNote} className='note th-7 D  '>D</div>
        </div>
        <div className='fret'>
          <div className='numb'>4</div>
          <div onClick={handleClickNote} className='note th-1 Gs '>G#</div>
          <div onClick={handleClickNote} className='note th-2 Ds '>D#</div>
          <div onClick={handleClickNote} className='note th-3 B  '>B</div>
          <div onClick={handleClickNote} className='note th-4 Fs '>F#</div>
          <div onClick={handleClickNote} className='note th-5 Cs '>C#</div>
          <div onClick={handleClickNote} className='note th-6 Gs '>G#</div>
          <div onClick={handleClickNote} className='note th-7 Ds '>D#</div>
        </div>
        <div className='fret'>
          <div className='numb'>5</div>
          <div onClick={handleClickNote} className='note th-1 A '>A</div>
          <div onClick={handleClickNote} className='note th-2 E '>E</div>
          <div onClick={handleClickNote} className='note th-3 C '>C</div>
          <div onClick={handleClickNote} className='note th-4 G '>G</div>
          <div onClick={handleClickNote} className='note th-5 D '>D</div>
          <div onClick={handleClickNote} className='note th-6 A '>A</div>
          <div onClick={handleClickNote} className='note th-7 E '>E</div>
        </div>
        <div className='fret'>
          <div className='numb'>6</div>
          <div onClick={handleClickNote} className='note th-1 As '>A#</div>
          <div onClick={handleClickNote} className='note th-2 F  '>F</div>
          <div onClick={handleClickNote} className='note th-3 Cs '>C#</div>
          <div onClick={handleClickNote} className='note th-4 Gs '>G#</div>
          <div onClick={handleClickNote} className='note th-5 Ds '>D#</div>
          <div onClick={handleClickNote} className='note th-6 As '>A#</div>
          <div onClick={handleClickNote} className='note th-7 F  '>F</div>
        </div>
        <div className='fret'>
          <div className='numb'>7</div>
          <div onClick={handleClickNote} className='note th-1 B  '>B</div>
          <div onClick={handleClickNote} className='note th-2 Fs '>F#</div>
          <div onClick={handleClickNote} className='note th-3 D  '>D</div>
          <div onClick={handleClickNote} className='note th-4 A  '>A</div>
          <div onClick={handleClickNote} className='note th-5 E  '>E</div>
          <div onClick={handleClickNote} className='note th-6 B  '>B</div>
          <div onClick={handleClickNote} className='note th-7 Fs '>F#</div>
        </div>
        <div className='fret'>
          <div className='numb'>8</div>
          <div onClick={handleClickNote} className='note th-1 C  '>C</div>
          <div onClick={handleClickNote} className='note th-2 G  '>G</div>
          <div onClick={handleClickNote} className='note th-3 Ds '>D#</div>
          <div onClick={handleClickNote} className='note th-4 As '>A#</div>
          <div onClick={handleClickNote} className='note th-5 F  '>F</div>
          <div onClick={handleClickNote} className='note th-6 C  '>C</div>
          <div onClick={handleClickNote} className='note th-7 G  '>G</div>
        </div>
        <div className='fret'>
          <div className='numb'>9</div>
          <div onClick={handleClickNote} className='note th-1 Cs '>C#</div>
          <div onClick={handleClickNote} className='note th-2 Gs '>G#</div>
          <div onClick={handleClickNote} className='note th-3 E  '>E</div>
          <div onClick={handleClickNote} className='note th-4 B  '>B</div>
          <div onClick={handleClickNote} className='note th-5 Fs '>F#</div>
          <div onClick={handleClickNote} className='note th-6 Cs '>C#</div>
          <div onClick={handleClickNote} className='note th-7 Gs '>G#</div>
        </div>
        <div className='fret'>
          <div className='numb'>10</div>
          <div onClick={handleClickNote} className='note th-1 D '>D</div>
          <div onClick={handleClickNote} className='note th-2 A '>A</div>
          <div onClick={handleClickNote} className='note th-3 F '>F</div>
          <div onClick={handleClickNote} className='note th-4 C '>C</div>
          <div onClick={handleClickNote} className='note th-5 G '>G</div>
          <div onClick={handleClickNote} className='note th-6 D '>D</div>
          <div onClick={handleClickNote} className='note th-7 A '>A</div>
        </div>
        <div className='fret'>
          <div className='numb'>11</div>
          <div onClick={handleClickNote} className='note th-1 Ds '>D#</div>
          <div onClick={handleClickNote} className='note th-2 As '>A#</div>
          <div onClick={handleClickNote} className='note th-3 Fs '>F#</div>
          <div onClick={handleClickNote} className='note th-4 Cs '>C#</div>
          <div onClick={handleClickNote} className='note th-5 Gs '>G#</div>
          <div onClick={handleClickNote} className='note th-6 Ds '>D#</div>
          <div onClick={handleClickNote} className='note th-7 As '>A#</div>
        </div>
        <div className='fret'>
          <div className='numb'>12</div>
          <div onClick={handleClickNote} className='note th-1 E '>E</div>
          <div onClick={handleClickNote} className='note th-2 B '>B</div>
          <div onClick={handleClickNote} className='note th-3 G '>G</div>
          <div onClick={handleClickNote} className='note th-4 D '>D</div>
          <div onClick={handleClickNote} className='note th-5 A '>A</div>
          <div onClick={handleClickNote} className='note th-6 E '>E</div>
          <div onClick={handleClickNote} className='note th-7 B '>B</div>
        </div>
        <div className='fret'>
          <div className='numb'>13</div>
          <div onClick={handleClickNote} className='note th-1 F  '>F</div>
          <div onClick={handleClickNote} className='note th-2 C  '>C</div>
          <div onClick={handleClickNote} className='note th-3 Gs '>G#</div>
          <div onClick={handleClickNote} className='note th-4 Ds '>D#</div>
          <div onClick={handleClickNote} className='note th-5 As '>A#</div>
          <div onClick={handleClickNote} className='note th-6 F  '>F</div>
          <div onClick={handleClickNote} className='note th-7 C  '>C</div>
        </div>
        <div className='fret'>
          <div className='numb'>14</div>
          <div onClick={handleClickNote} className='note th-1 Fs '>F#</div>
          <div onClick={handleClickNote} className='note th-2 Cs '>C#</div>
          <div onClick={handleClickNote} className='note th-3 A  '>A</div>
          <div onClick={handleClickNote} className='note th-4 E  '>E</div>
          <div onClick={handleClickNote} className='note th-5 B  '>B</div>
          <div onClick={handleClickNote} className='note th-6 Fs '>F#</div>
          <div onClick={handleClickNote} className='note th-7 Cs '>C#</div>
        </div>
        <div className='fret'>
          <div className='numb'>15</div>
          <div onClick={handleClickNote} className='note th-1 G  '>G</div>
          <div onClick={handleClickNote} className='note th-2 D  '>D</div>
          <div onClick={handleClickNote} className='note th-3 As '>A#</div>
          <div onClick={handleClickNote} className='note th-4 F  '>F</div>
          <div onClick={handleClickNote} className='note th-5 C  '>C</div>
          <div onClick={handleClickNote} className='note th-6 G  '>G</div>
          <div onClick={handleClickNote} className='note th-7 D  '>D</div>
        </div>
      </div>
    </div>
  );
}
