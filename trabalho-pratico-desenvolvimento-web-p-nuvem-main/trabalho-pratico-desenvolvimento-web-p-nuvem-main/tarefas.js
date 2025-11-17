import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  concluida: {
    type: Boolean,
    default: false
  }
});

const Tarefa = mongoose.model("Tarefa", tarefaSchema);

export default Tarefa;
