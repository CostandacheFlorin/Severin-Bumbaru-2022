import defaultImage from '../../../img/randomdude.jpg';



const Picture = ({image, style, classname, alt}) => {
    return(
  
        <img  src={image}  alt="Imagine text" className={classname}  />
    )
      
}

Picture.defaultProps= {
    image: defaultImage,
    style: {}
}


// default image daca nu gasesc poza asa
// sa setez height la div sau cv

export default Picture;