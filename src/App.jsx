// App.jsx
import { useEffect, useRef } from "react";
import Grid from "tui-grid";
import "tui-grid/dist/tui-grid.css";

function App() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const grid = new Grid({
      el: gridRef.current,
      scrollX: false,
      scrollY: false,
      rowHeaders: ["rowNum"],
      columnOptions: { resizable: true },
      columns: [
        { header: "이름", name: "name", align: "center" },
        {
          header: "나이",
          name: "age",
          sortingType: "desc",
          sortable: true,
          align: "center",
        },
        { header: "직업", name: "job", align: "center" },
        { header: "주소", name: "address", align: "center" },
      ],
      data: [
        { name: "홍길동", age: 29, job: "개발자", address: "대구" },
        { name: "김철수", age: 35, job: "디자이너", address: "서울" },
        { name: "이영희", age: 42, job: "기획자", address: "인천" },
        { name: "이유리", age: 38, job: "마케터", address: "부산" },
      ],
    });

    return () => grid.destroy();
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl rounded-2xl bg-white shadow-xl p-6 text-center">
        <h1 className="text-2xl font-bold mb-6 text-center">회원 목록 1</h1>
        <div
          ref={gridRef}
          className="w-full max-w-2xl mx-auto border rounded-lg"
          style={{ minHeight: 240 }}
        />
      </div>
    </div>
  );
}

export default App;
