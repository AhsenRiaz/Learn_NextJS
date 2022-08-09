import { articles } from "../../../data";

export default function handler(req, res) {
    const {query:{id}} = req

    const filtered = articles.filter((article) => article.id === id);
    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    }
    else{
        res.status(404).json({
            message: `article of id ${id} not found`
        })
    }
}
