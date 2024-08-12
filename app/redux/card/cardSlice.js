
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = {
  value: ["Nothing is Selected"],
}

export const cardSlice = createSlice({
  name: 'card',
  
  initialState,

  reducers: {
    change: (state, action)=>{
        let subjectObj = {
            subject: "",
            chapters: [],
            urls: [],
        }
        let sub = null;
        if(action.payload == "physics"){
            sub = 'py'
            state.value = sub
            subjectObj.subject = sub
            subjectObj.chapters = ["Matter", "Physical Quantites And Measurement", "Force And Pressure", "Energy", "Light Energy", "Heat Energy", "Sound", "Electricity"]
            subjectObj.urls = [    "matter",    "physical-quantites-and-measurement",    "force-and-pressure",    "energy",    "light-energy",    "heat-energy",    "sound",    "electricity"]

        }
        else if(action.payload == "chemistry"){
            sub = 'chem'
            state.value = sub
            subjectObj.subject = sub
            subjectObj.chapters = ["Matter", "Changes Around Us", "Elements, Compounds and Mixtures", "Atomic Structure", "Language Of Chemistry", "Chemical Recations", "Hydrogen", "Water", "Carbon and its Allotropes", "Carbon and its Oxides"]
            subjectObj.urls = [    "matter",    "changes-around-us",    "elements-compounds-and-mixtures",    "atomic-structure",    "language-of-chemistry",    "chemical-recations",    "hydrogen",    "water",    "carbon-and-its-allotropes",    "carbon-and-its-oxides"]
        }
        else if(action.payload == "biology"){
            sub = 'bio'
            state.value = sub
            subjectObj.subject = sub
            subjectObj.chapters = ["Transport In Plants", "Reproduction In Plants", "Reproduction In Humans", "Ecosystem", "Endocrine And Adolescene", "Circulatory System", "Nervous System", "Diseases and First Aid", "Food Production"]
            subjectObj.urls = [    "transport-in-plants",    "reproduction-in-plants",    "reproduction-in-humans",    "ecosystem",    "endocrine-and-adolescene",    "circulatory-system",    "nervous-system",    "diseases-and-first-aid",    "food-production"]
        }
        else if(action.payload == "maths"){
            sub = 'maths'
            state.value = sub
            subjectObj.subject = sub
            subjectObj.chapters = ["Rational Numbers"]
        }
        else if(action.payload == "english language"){
            sub = 'englang'
            state.value = sub
            subjectObj.subject = sub
            subjectObj.chapters = ["Sentences"]
        }
        else if(action.payload == "literature in english"){
            sub = 'englit'
            state.value = sub
            subjectObj.subject = sub
            subjectObj.chapters = ["Where is Mind Without Fear"]
        }
        else if(action.payload == "history"){
            sub = 'hist'
            state.value = sub
            subjectObj.subject = sub
            subjectObj.chapters = ["A period Of Transition"]
        }
        else if(action.payload == "geography"){
            sub = 'geo'
            state.value = sub
            subjectObj.subject = sub
            subjectObj.chapters = ["TropoGraphical Maps"]
        }
        else{
          throw TypeError("The prop sent is invalid or please try again later")
        }
       let cur = "null"
       cur = state.value.toUpperCase()
        const data = {
            id:nanoid(),
            name:action.payload,
            subject: cur,
            processed: subjectObj,
        }
        state.value = data
        
    }
  }
})

// Action creators are generated for each case reducer function
export const { change } = cardSlice.actions

export default cardSlice.reducer