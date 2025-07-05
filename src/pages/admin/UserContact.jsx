import { Cog6ToothIcon, EyeIcon, EyeSlashIcon, ListBulletIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import swal from "sweetalert";
import axios from "../../api/axios";


export default function UserContact() {
  const { allContacts, userInformation, afterDeleteContact, updateContectStatus } = useContext(AuthContext)
  const [contacts, setContects] = useState(allContacts);
  const userToken = JSON.parse(localStorage.getItem("token"));


  const statusChangeHandler= (id) => {
    const userToken = JSON.parse(localStorage.getItem("token"));

    const formData = new FormData();
    formData.append('id', id)
    axios.put(
      "/update-contact-status", formData,
      {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }
    ).then(response => {
      const updatedContact = response.data.contact;
      setContects(prevContact =>
        prevContact.map(contact =>
          contact.id === updatedContact.id ? { ...contact, status: updatedContact.status } : contact
        )
      );
      updateContectStatus(updatedContact.id, updatedContact.status);
    })
  }


  const deletContact = (contactID) => {
    swal({
      title: "Are you sure to delete this contact?",
      icon: "warning",
      buttons: ["No", "Ok"]
    }).then((response) => {

      if (response && userInformation.role == "ADMIN") {
        console.log(response + "hassan");

        axios.delete(`/delete-contact/${contactID}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`
            }
          }
        ).then(response => {
          console.log(response);

          if (response.statusText) {
            swal({
              title: response.data.message,
              icon: "success",
              button: "Ok"
            })
            setContects(prevContact => prevContact.filter(contact => contact.id !== contactID));
            afterDeleteContact(contactID);
          }
        })
      } else {
        swal({
          title: "You canceled the operation.",
          icon: "success",
          button: "Ok"
        })
      }

    })
  }
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <ListBulletIcon className="size-6" />
        <div className="font-bold">
          Users Contact List
        </div>

      </div>
      <i className="flex justify-between items-center text-slate-300 mt-4 mb-8 border-b border-b-slate-500" />

      <table className="min-w-full text-sm text-left rtl:text-right text-slate-100 rounded-xl overflow-hidden">
        <thead className=" text-sm bg-slate-900">
          <tr className="border-b border-slate-700">
            <th scope="col" className="px-3 py-6">#</th>
            <th scope="col" className="px-3 py-6">Name</th>
            <th scope="col" className="px-3 py-6">Email</th>
            <th scope="col" className="px-3 py-6">Status</th>
            <th scope="col" className="px-3 py-6">Message</th>
            <th scope="col" className="px-3 py-6 flex items-center gap-1">
              Setting
              <Cog6ToothIcon className="size-5" />
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index} className="border-b text-slate-300 border-slate-800 hover:bg-slate-900/30  bg-slate-900/70">
              <th className="px-3 py-4">{index + 1}</th>
              <td className="px-3 py-4">{contact.fullName}</td>
              <td className="px-3 py-4">{contact.email}</td>
              <td className={`px-2 py-4 text-base font-semibold ${contact.status == 0 ? "text-yellow-500" : "text-cyan-500"}`}>{contact.status == 0 ? "Unanswered" : "Answered"}</td>
              <td className="px-3 py-4">{(contact.message).slice(0, 135)}</td>
              <td className="px-3 py-4 flex justify-center items-center gap-1">
                <button type="button" onClick={() => statusChangeHandler(contact.id)} className={`flex justify-center items-center gap-1 font-medium  ${contact.status == 0 ? "bg-yellow-600 hover:bg-yellow-500" : "bg-cyan-600 hover:bg-cyan-400"} text-white p-1 rounded-md`}>
                  {contact.status == 0 ? <EyeSlashIcon className="size-5" /> : <EyeIcon className="size-5" />}
                  Status
                </button>
                <button type="button" onClick={() => deletContact(contact.id)} className="flex justify-center items-center gap-1 font-medium  bg-red-600 hover:bg-red-400 text-white p-1 rounded-md ">
                  <TrashIcon className="size-4" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
