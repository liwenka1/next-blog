import Image from './Image'

const Welcome = () => {
  return (
    <div>
      <Image
        className="inline-block"
        src="/static/images/welcome.jpg"
        alt="123"
        width={544}
        height={306}
      />
      <div className="ml-10 inline-block">
        <p>欢迎来到我的个人网站</p>
      </div>
    </div>
  )
}

export default Welcome
