
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { docsStructure } from "@/data/docs-structure";

interface DocsContentProps {
  docPath: string;
}

const DocsContent = ({ docPath }: DocsContentProps) => {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [docInfo, setDocInfo] = useState<{
    title: string;
    description: string;
    headerImage: string | null;
  } | null>(null);

  useEffect(() => {
    const fetchDocContent = async () => {
      if (!docPath) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const [folderId, fileId] = docPath.split('/');
        const folder = docsStructure.folders.find(f => f.id === folderId);
        const file = folder?.files.find(f => f.id === fileId);
        
        if (!folder || !file) {
          setError("Document not found");
          setIsLoading(false);
          return;
        }
        
        // Set document metadata
        setDocInfo({
          title: file.title,
          description: file.description,
          headerImage: file.headerImage
        });
        
        // Fetch the markdown content
        const response = await fetch(file.path);
        
        if (!response.ok) {
          throw new Error(`Failed to load document: ${response.status}`);
        }
        
        const text = await response.text();
        setContent(text);
      } catch (err) {
        console.error("Error loading documentation:", err);
        setError("Failed to load document content. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchDocContent();
  }, [docPath]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
        <div className="h-64 bg-gray-200 rounded w-full"></div>
      </div>
    );
  }

  if (error || !docInfo) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-red-500 mb-2">Error</h2>
        <p>{error || "Document not found"}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {docInfo.headerImage && (
        <div className="w-full h-48 md:h-64 overflow-hidden">
          <img 
            src={docInfo.headerImage} 
            alt={docInfo.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h1 className="text-2xl md:text-3xl font-display font-bold mb-3">{docInfo.title}</h1>
        {docInfo.description && (
          <p className="text-muted-foreground mb-6">{docInfo.description}</p>
        )}
        
        <div className="prose prose-stone max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default DocsContent;
