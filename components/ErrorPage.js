import React from 'react';
import Link from "next/link";

const ErrorPage = ({ error }) => {
  return (
    <section className="section-sm pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              {error.title && <h1 className="page-not-found-title">{error.title}</h1>}
              {error.desc && <p className="mb-4">{error.desc}</p>}
              {error?.button.link ? (
                <Link href={error?.button.link}>
                    <a className="btn btn-primary">{error?.button.text}</a>
                </Link>
              ) : (
                <button onClick={error?.button.onClick} className="btn btn-primary">{error?.button.text}</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage