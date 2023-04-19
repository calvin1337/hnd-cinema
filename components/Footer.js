const Footer = () => {
  return (
    <footer className=" mt-10">
      <div className="grid grid-cols-4 grid-rows-1 lg:container gap-x-5 ">
      <div class="col-span-2">
        <h6>About this project</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ab,
          itaque doloribus eum facilis cumque, rem excepturi ex consequuntur
          minus consectetur eligendi voluptate ut quas aperiam laboriosam, aut
          dolore dolorem!
        </p>
      </div>
      <div class="col-span-1">
        <h6>Personal Links</h6>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div class="col-span-1">
        <h6>Links</h6>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Now Showing</li>
          <li>Coming Soon</li>
        </ul>
      </div>
      </div>

      <hr />
      
    </footer>
  );
};

export default Footer;
