const TagSetup=data=>{
  const allTags={}
    const {allContentfulRecipeApp:{nodes:recipe}}=data
  recipe.forEach(element=> {
      const {contetn:{tags:tag}}=element
      tag.forEach(item=>{
          if(allTags[item])
          allTags[item]=allTags[item] + 1;
          else{
              allTags[item]=1
          }
      })
  })

  const newTags=Object.entries(allTags).sort((a,b)=>{
      const[firstTag]=a
      const[secondTag]=b
      return firstTag.localeCompare(secondTag)
  })
    return newTags
}

export default TagSetup