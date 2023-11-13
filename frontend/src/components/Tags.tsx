const categories = [
  "All",
  "JavaScript",
  "TypeScript",
  "Programming",
  "React",
  "Next.js",
  "Functional Programming",
  "Object Oriented Programming",
  "Frontend Web Development",
  "Backend Web Development",
  "Web Development",
  "Coding",
]

interface TagsProps {
  tag: string;
  setTag: (tag: string) => void;
}

const Tags = (props: TagsProps) => {
  const { tag, setTag } = props;
  const classNames = (value: string) => {
    let className = 'mx-4 rounded-md px-4 py-1 bg-gray-200 text-base hover:bg-gray-100 transition-all [text-wrap:nowrap]'
    className = value === tag ? className.replace('bg-gray-200', '').replace('hover:bg-gray-100', '') + ' text-white bg-black' : className;
    return className;
  }

  return (
    <section className='overflow-scroll h-12 w-full flex items-start py-2'>
      {categories.map((category) => (<button value={category} className={classNames(category)} onClick={() => setTag(category)} key={category}>{category}</button>))}
    </section>
  )
}

export default Tags