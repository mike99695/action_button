import React from 'react'
import classes from "./AddDocument.module.css";
const AddDocument = () => {
    return (
        <form className={classes.form}>
            <div className={classes.title}>Додати документ</div>
          <input
            className={classes.input}
            type="string"
            placeholder="Назва документу"
          />
          <input className={classes.inputD} type="String" placeholder="Детальний опис" />
          <input 
            className={classes.fileInput}
            type="file"
            accept=".pdf, .doc, .docx"  
          />
          <button className={classes.submitBtn} type="submit">
            Submit
          </button>
        </form>
      );
}

export default AddDocument;