
import About from "./components/about/About";
import Artist from "./components/artist/Artist";
import Collaborations from "./components/collaborations/Collaborations";
import Homepage from "./components/homepage/Homepage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Photos from "./components/photos/Photos";
import Events from "./components/events/Events";
import React from "react";
import FatsomaWidget from "./components/LowercaseTicket/Lowercaseticketwidget";
import AlbumUpload from "./components/admin/Album/Albumupload";
import AdminLayout from "./components/admin/Adminlayout";
import Abumlist from "./components/admin/Album/Abumlist";
import Albumshow from "./components/Pages/Albums/Albumshow";
import Photobyalbum from "./components/Pages/Photos/Photobyalbum";
import Artistdetail from "./components/artist/Artistdetail";
import NewArtist from "./components/NewArtist/NewArtist";
import Login from "./components/admin/Album/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import PrivacyPolicy from "./components/Pages/Privacypolicies/PrivacyPolicy";
import TermsAndConditions from "./components/Pages/Termsandconditions/TermsAndConditions";
import ContactUs from "./components/forms/ContactUs";
import GroupBookings from "./components/forms/GroupBookings";
import Birthdays from "./components/footer/Birthdays";
import Societies from "./components/footer/Societies";
import Venues from "./components/forms/Venues";
import UGR from "./components/forms/UGR";
import Advertise from "./components/forms/Advertise";
import UGC from "./components/forms/UGC";
import Faq from "./components/Pages/Faq/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/group-bookings" element={<GroupBookings />} />

        <Route path="/birthdays" element={<Birthdays />} />

        <Route path="/socities" element={<Societies />} />

        <Route path="/venues" element={<Venues />} />

        <Route path="/ugr" element={<UGR />} />
        <Route path="/ugc" element={<UGC />} />



        <Route path="/advertise" element={<Advertise />} />

        <Route path="/about" element={<About />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/newartist" element={<NewArtist />} />
        {/* <Route path="/artist/details" element={<Artistdetail />} /> */}
        <Route path="/artist/:id" element={<Artistdetail />} />

        <Route path="/collab" element={<Collaborations />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/events" element={<Events />} />

        <Route path="/tkt" element={<FatsomaWidget />} />

        <Route path="/albums" element={<Albumshow />} />

        <Route path="/photobyalbum/:id" element={<Photobyalbum />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />


        <Route path="/faq" element={<Faq />} />


        {/* <Route path="/admin" element={<AlbumUpload />} /> */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>

              <AdminLayout />
            </ProtectedRoute>
           
          
          }
        >
          <Route index element={<Abumlist />} />
          <Route path="albumlist" element={<Abumlist />} />
          <Route path="albumupload" element={<AlbumUpload />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
