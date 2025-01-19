import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Image, Video, Loader2 } from 'lucide-react';

interface ProjectFormData {
    title: string;
    description: string;
    tags: string[];
    mediaType: 'image' | 'video';
    githubUrl?: string;
    liveUrl?: string;
}

export function ProjectUpload() {
    const [formData, setFormData] = useState<ProjectFormData>({
        title: '',
        description: '',
        tags: [],
        mediaType: 'image',
    });
    const [tagInput, setTagInput] = useState('');
    const [mediaPreview, setMediaPreview] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setMediaPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && tagInput.trim()) {
            e.preventDefault();
            setFormData(prev => ({
                ...prev,
                tags: [...prev.tags, tagInput.trim()]
            }));
            setTagInput('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsUploading(true);
        // TODO: Implement project upload logic
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated upload
        setIsUploading(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Upload New Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Media Upload Section */}
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, mediaType: 'image' }))}
                            className={`flex-1 p-4 rounded-lg border-2 ${
                                formData.mediaType === 'image'
                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                    : 'border-gray-200 dark:border-gray-700'
                            }`}
                        >
                            <Image className="w-6 h-6 mx-auto mb-2" />
                            <span className="text-sm font-medium">Image</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, mediaType: 'video' }))}
                            className={`flex-1 p-4 rounded-lg border-2 ${
                                formData.mediaType === 'video'
                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                    : 'border-gray-200 dark:border-gray-700'
                            }`}
                        >
                            <Video className="w-6 h-6 mx-auto mb-2" />
                            <span className="text-sm font-medium">Video</span>
                        </button>
                    </div>

                    <div className="relative">
                        <input
                            type="file"
                            accept={formData.mediaType === 'video' ? 'video/*' : 'image/*'}
                            onChange={handleMediaChange}
                            className="hidden"
                            id="media-upload"
                        />
                        <label
                            htmlFor="media-upload"
                            className="relative block w-full aspect-video rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors cursor-pointer overflow-hidden"
                        >
                            {mediaPreview ? (
                                formData.mediaType === 'video' ? (
                                    <video
                                        src={mediaPreview}
                                        className="w-full h-full object-cover"
                                        controls
                                    />
                                ) : (
                                    <img
                                        src={mediaPreview}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                )
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <Upload className="w-8 h-8 text-gray-400" />
                                    <p className="mt-2 text-sm text-gray-500">
                                        Click to upload {formData.mediaType}
                                    </p>
                                </div>
                            )}
                        </label>
                    </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Project Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={formData.title}
                            onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Tags
                        </label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {formData.tags.map(tag => (
                                <motion.span
                                    key={tag}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                                >
                                    {tag}
                                    <button
                                        type="button"
                                        onClick={() => removeTag(tag)}
                                        className="hover:text-blue-900 dark:hover:text-blue-100"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </motion.span>
                            ))}
                        </div>
                        <input
                            type="text"
                            id="tags"
                            value={tagInput}
                            onChange={e => setTagInput(e.target.value)}
                            onKeyDown={handleAddTag}
                            placeholder="Type and press Enter to add tags"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                GitHub URL
                            </label>
                            <input
                                type="url"
                                id="githubUrl"
                                value={formData.githubUrl}
                                onChange={e => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="liveUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Live Demo URL
                            </label>
                            <input
                                type="url"
                                id="liveUrl"
                                value={formData.liveUrl}
                                onChange={e => setFormData(prev => ({ ...prev, liveUrl: e.target.value }))}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                <motion.button
                    type="submit"
                    disabled={isUploading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isUploading ? (
                        <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Uploading...
            </span>
                    ) : (
                        'Upload Project'
                    )}
                </motion.button>
            </form>
        </div>
    );
}
