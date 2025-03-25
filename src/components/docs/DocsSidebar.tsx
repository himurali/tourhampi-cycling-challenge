
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, FileText } from "lucide-react";
import { docsStructure } from "@/data/docs-structure";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface DocsSidebarProps {
  currentDoc: string;
}

const DocsSidebar = ({ currentDoc }: DocsSidebarProps) => {
  const [openFolders, setOpenFolders] = useState<string[]>(() => {
    // Initialize with the current folder open
    if (currentDoc) {
      const folderId = currentDoc.split('/')[0];
      return [folderId];
    }
    return [];
  });

  const toggleFolder = (folderId: string) => {
    setOpenFolders(prev => 
      prev.includes(folderId)
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
      <h3 className="text-lg font-semibold mb-4 text-hampi-dark pb-2 border-b">Documentation</h3>
      <nav className="space-y-1">
        {docsStructure.folders.map((folder) => (
          <Collapsible
            key={folder.id}
            open={openFolders.includes(folder.id)}
            onOpenChange={() => toggleFolder(folder.id)}
            className="border-l-2 border-transparent hover:border-hampi-orange/30 transition-colors"
          >
            <CollapsibleTrigger className="flex items-center w-full p-2 text-left text-sm font-medium hover:bg-muted/50 rounded transition-colors">
              {openFolders.includes(folder.id) ? (
                <ChevronDown className="h-4 w-4 mr-2 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-2 text-muted-foreground" />
              )}
              <span>{folder.name}</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-1 pt-1">
              {folder.files.map((file) => {
                const docPath = `${folder.id}/${file.id}`;
                const isActive = currentDoc === docPath;
                
                return (
                  <Link
                    key={file.id}
                    to={`#${docPath}`}
                    className={`flex items-center p-2 text-sm rounded-md ${
                      isActive 
                        ? "bg-hampi-orange/10 text-hampi-orange font-medium" 
                        : "text-muted-foreground hover:bg-muted/50"
                    }`}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    <span>{file.title}</span>
                  </Link>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </nav>
    </div>
  );
};

export default DocsSidebar;
