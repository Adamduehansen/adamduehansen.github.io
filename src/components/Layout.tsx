import React from 'react';
import Helmet from 'react-helmet';
import { container, heading } from './Layout.module.css';

type Props = React.PropsWithChildren<{
  pageTitle: string;
}>;

const Layout = function ({ pageTitle, children }: Props): JSX.Element {
  return (
    <div className={container}>
      <Helmet title={pageTitle}></Helmet>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
