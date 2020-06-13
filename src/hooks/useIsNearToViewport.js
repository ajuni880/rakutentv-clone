import { useState, useEffect, useRef } from "react"

const defaultValues = {
  rootMargin: '0px'
}

export default ({ rootMargin } = defaultValues) => {
  const [isNear, setNear] = useState(false);
  const elemRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([elem], observer) => {
      if (elem.isIntersecting) {
        setNear(true);
        observer.disconnect();
      }
    }, { rootMargin });

    elemRef.current && observer.observe(elemRef.current);
    return () => observer && observer.disconnect();
  });

  return { isNear, elemRef };
}