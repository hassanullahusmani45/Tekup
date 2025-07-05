import { Cog6ToothIcon, ListBulletIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import post1 from "../../assets/images/post1.webp"
import { Link } from "react-router-dom";
import { ClipboardDocumentListIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import axios from "../../api/axios";
import swal from "sweetalert";


export default function Articles() {
  const { allArticles, updateArticleStatus, userInformation, afterDeleteArticle } = useContext(AuthContext);
  const [articles, setArticles] = useState(allArticles)

  const satatusChangeHeandler = (id) => {
    const userToken = JSON.parse(localStorage.getItem("token"));

    const formData = new FormData();
    formData.append('id', id)
    axios.put(
      "/update-article-status", formData,
      {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }
    ).then(response => {
      const updatedArticle = response.data.article;
      setArticles(prevArticles =>
        prevArticles.map(article =>
          article.id === updatedArticle.id ? { ...article, status: updatedArticle.status } : article
        )
      );
      updateArticleStatus(updatedArticle.id, updatedArticle.status);
    })
  }

  const deletArticle = (articleId) => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    swal({
      title: "Are you sure to delete this article?",
      icon: "warning",
      buttons: ["No", "Ok"]
    }).then((response) => {
      if (response && userInformation.role == "ADMIN") {
        axios.delete(`/delete-article/${articleId}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`
            }
          }
        ).then(response => {
          if (response.statusText) {
            swal({
              title: response.data.message,
              icon: "success",
              button: "Ok"
            })
            setArticles(prevArticles => prevArticles.filter(article => article.id !== articleId));
            afterDeleteArticle(articleId);
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
          Articles List
        </div>

      </div>
      <i className="flex justify-between items-center text-slate-300 mt-4 mb-8 border-b border-b-slate-500" />
      <div className="overflow-hidden !overflow-x-auto rounded-lg">

        <table className="min-w-full table-fixed text-sm text-left rtl:text-right text-slate-100 rounded-xl">
          <thead className=" text-sm bg-slate-900">
            <tr className="border-b border-slate-700">
              <th scope="col" className="px-2 py-6">#</th>
              <th scope="col" className="px-2 py-6">Cover-Img</th>
              <th scope="col" className="px-2 py-6">Title</th>
              <th scope="col" className="px-2 py-6">Author</th>
              <th scope="col" className="px-2 py-6">Visitor</th>
              <th scope="col" className="px-2 py-6">Category</th>
              <th scope="col" className="px-2 py-6 text-nowrap">Display-Mode</th>
              <th scope="col" className="px-2 py-6 text-nowrap">Publication-Date</th>
              <th scope="col" className="px-2 py-6 flex items-center gap-1">
                <Cog6ToothIcon className="size-5" />
                Setting
              </th>

            </tr>
          </thead>
          <tbody className="">
            {articles.map((article, index) => (
              <tr key={index} className="border-b text-slate-300 border-slate-800 hover:bg-slate-900/30  bg-slate-900/70">
                <th className="px-2 py-4">{index + 1}</th>
                <td className="px-2 py-1">
                  <img src={article.coverImg !== null ? article.coverImg : post1} className="min-w-28 min-h-14 max-w-28 max-h-14 rounded" alt={(article.title).slice(0, 20) + " ..."} />
                </td>
                <td className="px-2 py-4">{(article.title).slice(0, 20)}</td>
                <td className="px-2 py-4">{article.author?.fullName || "Have not author!"}</td>
                <td className="px-2 py-4">{article.show}</td>
                <td className="px-2 py-4 font-serif">
                  {article.category == 1 && "Frontend"}
                  {article.category == 2 && "Backend"}
                  {article.category == 3 && "AI"}
                  {article.category == 4 && "Security"}
                </td>
                <td className={`px-2 py-4 text-base font-semibold ${article.status == 0 ? "text-yellow-500" : "text-cyan-500"}`}>{article.status == 0 ? "Pending" : "Showing"}</td>
                <td className="px-2 py-4 text-nowrap">{(article.created_at).slice(0, 10)}</td>

                <td className="px-2 py-4 flex justify-center items-center gap-1">
                  <button type="button" onClick={() => satatusChangeHeandler(article.id)} className={`flex justify-center items-center gap-1 font-medium  ${article.status == 0 ? "bg-yellow-600 hover:bg-yellow-500" : "bg-cyan-600 hover:bg-cyan-400"} text-white p-1 rounded-md`}>
                    {article.status == 0 ? <EyeSlashIcon className="size-5" /> : <EyeIcon className="size-5" />}
                    Status
                  </button>
                  <Link to={"/"} className="flex justify-center items-center gap-1 font-medium bg-green-600 hover:bg-green-400 text-white p-1 rounded-md ">
                    <ClipboardDocumentListIcon className="size-5" />
                    Topics
                  </Link>

                  <button type="button" onClick={() => deletArticle(article.id)} className="flex justify-center items-center gap-1 font-medium  bg-red-600 hover:bg-red-400 text-white p-1 rounded-md ">
                    <TrashIcon className="size-4" />
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
