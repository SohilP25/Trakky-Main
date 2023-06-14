import React from "react";
import "./forms.css";

const OffersForm = () => {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <form method="post">
            <h1>Offer</h1>
            
            <div className="form-group">
              <label htmlFor="image">Image *</label>
              <input
                className="form-control"
                style={{ padding: "0.5rem" }}
                type="file"
                name="image"
                id="image"
                required
              />
            </div>

            <button
              className="submit-btn"
              type="submit"
            >
              Add Offer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OffersForm;


// import React, { useState } from "react";
// import "./forms.css";
// const OffersForm = () => {
//   const [name, setName] = useState("");
//   const [Slug, setSlug] = useState("");
//   const [Priority, setPriority] = useState(null);
//   const [spa, setspa] = useState("");
//   const [Image, setImage] = useState(null);

//   const handleFileChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   // Post Request Starts
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!Image) {
//       console.log("Please select a file");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("Name", name);
//     formData.append("Priority", Priority);
//     formData.append("Slug", Slug);
//     formData.append("Select_Spa", spa);
//     formData.append("Image", Image);

//     try {
//       await fetch("http://localhost:8080/api/v1/Offer", {
//         method: "POST",
//         body: formData,
//       });

//       alert("Offer uploaded successfully");
//     } catch (error) {
//       console.error("Error uploading image", error);
//     }
//   };
//   // Post Request Ends

//   return (
//     <>
//       <div className="main-container">
//         <div className="container">
//           <form method="post" onSubmit={handleSubmit}>
//             <h1>Offer</h1>
//             <div className="form-group">
//               <label htmlFor="name">Name *</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 name="text"
//                 id="name"
//                 placeholder="Enter Name"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="slug">Slug *</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 name="text"
//                 id="slug"
//                 placeholder="Enter slug"
//                 onChange={(e) => setSlug(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="name">Select Spa(s) *</label>
//               <select
//                 name="spa"
//                 style={{ height: "fit-content" }}
//                 className="form-control"
//                 id="spas"
//                 onChange={(e) => setspa(e.target.value)}
//                 // multiple
//               >
//                 <option disabled selected value>
//                   {" "}
//                   -- select a Spa --{" "}
//                 </option>
//                 <option value="Spa 1">Spa 1</option>
//                 <option value="Spa 2">Spa 2</option>
//                 <option value="Spa 3">Spa 3</option>
//                 <option value="Spa 4">Spa 4</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="priority">Priority *</label>
//               <input
//                 className="form-control"
//                 type="number"
//                 name="number"
//                 id="priority"
//                 placeholder="Enter Priority"
//                 onChange={(e) => setPriority(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="image">Image *</label>
//               <input
//                 className="form-control"
//                 style={{ padding: "0.5rem" }}
//                 type="file"
//                 name="image"
//                 id="image"
//                 onChange={handleFileChange}
//                 required
//               />
//             </div>

//             <button
//               className="submit-btn"
//               type="submit"
//               onSubmit={handleSubmit}
//             >
//               Add Offer
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OffersForm;
