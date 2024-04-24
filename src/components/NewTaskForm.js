import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [firstCategory, ...restOfCategories] = categories
  const [formData, setFormData] = useState({  
    text: "",
    category: "Code"
  })
  
  const categoryOptions = restOfCategories.map(category => {
    return <option name="category"  value={category} key={category}>{category}</option>
  })

function handleOnChange(e){
  const key = e.target.name
  const value = e.target.value
  console.log(key)
  console.log(value)
  
  
 setFormData({
    ...formData,
    [key]: value
  })
  

}

  function handleOnSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(formData)
  }

  return (
    <form className="new-task-form" onSubmit={handleOnSubmit}>
      <label>
        Details
        <input onChange={handleOnChange} value={formData.name} type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" onChange={handleOnChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
