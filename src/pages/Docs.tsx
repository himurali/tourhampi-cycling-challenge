
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DocsSidebar from "@/components/docs/DocsSidebar";
import DocsContent from "@/components/docs/DocsContent";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { docsStructure } from "@/data/docs-structure";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const Docs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentDoc, setCurrentDoc] = useState("");
  
  // Extract the doc path from the URL
  useEffect(() => {
    const path = location.hash.slice(1); // Remove the # from the hash
    if (path) {
      setCurrentDoc(path);
    } else if (docsStructure.folders.length > 0 && docsStructure.folders[0].files.length > 0) {
      // Default to first doc if none specified
      const defaultPath = `${docsStructure.folders[0].id}/${docsStructure.folders[0].files[0].id}`;
      setCurrentDoc(defaultPath);
      navigate(`#${defaultPath}`, { replace: true });
    }
  }, [location.hash, navigate]);

  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = () => {
    if (!currentDoc) return null;
    
    const [folderId, fileId] = currentDoc.split('/');
    const folder = docsStructure.folders.find(f => f.id === folderId);
    const file = folder?.files.find(f => f.id === fileId);
    
    if (!folder || !file) return null;
    
    return (
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`#${folder.id}/${folder.files[0].id}`}>{folder.name}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{file.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  };

  return (
    <div className="pt-24 pb-12 container mx-auto px-4">
      <AnimateOnScroll animation="fade-in">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
          Tour of Hampi Documentation
        </h1>
      </AnimateOnScroll>
      
      <AnimateOnScroll animation="fade-in" delay={100}>
        {generateBreadcrumbs()}
      </AnimateOnScroll>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4 lg:w-1/5">
          <AnimateOnScroll animation="slide-in-left" delay={200}>
            <DocsSidebar currentDoc={currentDoc} />
          </AnimateOnScroll>
        </div>
        <div className="md:w-3/4 lg:w-4/5">
          <AnimateOnScroll animation="fade-in" delay={300}>
            <DocsContent docPath={currentDoc} />
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Docs;
