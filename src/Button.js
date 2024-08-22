const Button = ({data, link}) => {
  return ( <a href={link} className="btn btn-primary">{data}</a> );
}
 
export default Button;