/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.3.2
 */
Bridge.assembly("Codex.View.Web", function ($asm, globals) {
    "use strict";

    Bridge.define("Codex.AdapterTypeAttribute", {
        inherits: [System.Attribute]
    });

    /** @namespace Codex */

    /**
     * Indicates an attached property which is not intrinsic to the parent object and should be
     excluded when computing the {@link }
     *
     * @public
     * @class Codex.AttachedAttribute
     * @augments System.Attribute
     */
    Bridge.define("Codex.AttachedAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.CodeReviewerStatus", {
        $kind: "enum",
        statics: {
            fields: {
                NotStarted: 0,
                Waiting: 1,
                ApprovedWithSuggestions: 2,
                Approved: 3,
                Declined: 4
            }
        }
    });

    Bridge.define("Codex.CodeReviewStatus", {
        $kind: "enum"
    });

    Bridge.define("Codex.CoerceGetAttribute", {
        inherits: [System.Attribute],
        fields: {
            CoercedSourceType: null
        },
        ctors: {
            ctor: function (coercedSourceType) {
                if (coercedSourceType === void 0) { coercedSourceType = null; }

                this.$initialize();
                System.Attribute.ctor.call(this);
                this.CoercedSourceType = coercedSourceType;
            }
        }
    });

    Bridge.define("Codex.CommentImportance", {
        $kind: "enum",
        statics: {
            fields: {
                /**
                 * Indicates that the author can decide to take the change or not
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 0
                 * @type Codex.CommentImportance
                 */
                AuthorDecides: 0,
                /**
                 * Default importance
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 1
                 * @type Codex.CommentImportance
                 */
                Info: 1,
                /**
                 * Reviewer would like further discussion on this comment
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 2
                 * @type Codex.CommentImportance
                 */
                Discuss: 2,
                /**
                 * Waiting on this comment to be addressed in order to approve
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 3
                 * @type Codex.CommentImportance
                 */
                Blocker: 3
            }
        }
    });

    Bridge.define("Codex.CommentStatus", {
        $kind: "enum",
        statics: {
            fields: {
                Unpublished: 0,
                Active: 1,
                Resolved: 2,
                WontFix: 3,
                Pending: 4,
                Closed: 5
            }
        }
    });

    Bridge.define("Codex.DataInclusionAttribute", {
        inherits: [System.Attribute],
        fields: {
            DataInclusion: 0
        },
        ctors: {
            ctor: function (dataInclusion) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.DataInclusion = dataInclusion;
            }
        }
    });

    Bridge.define("Codex.DataInclusionOptions", {
        $kind: "enum",
        statics: {
            fields: {
                /**
                 * Data should always be included
                 *
                 * @static
                 * @public
                 * @memberof Codex.DataInclusionOptions
                 * @constant
                 * @default 0
                 * @type Codex.DataInclusionOptions
                 */
                None: 0,
                Definitions: 1,
                References: 2,
                Classifications: 4,
                SearchDefinitions: 8,
                SearchReferences: 16,
                Content: 32,
                All: 63,
                Default: 62
            }
        }
    });

    Bridge.define("Codex.ISerializableEntity", {
        $kind: "interface"
    });

    Bridge.define("Codex.EntityIdAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.EntityUtilities", {
        statics: {
            methods: {
                NullOrCopy: function (T, TTarget, obj, copy) {
                    if (obj == null) {
                        return null;
                    }
                    return copy(obj);
                }
            }
        }
    });

    /**
     * Describes change kinds for files
     *
     * @public
     * @class Codex.FileChangeKind
     */
    Bridge.define("Codex.FileChangeKind", {
        $kind: "enum",
        statics: {
            fields: {
                Add: 0,
                Edit: 1,
                Rename: 2,
                Delete: 3
            }
        }
    });

    Bridge.define("Codex.Framework.Types.IStore", {
        $kind: "interface"
    });

    /** @namespace Codex.Framework.Types */

    /**
     * High level storage operations
     *
     * @abstract
     * @public
     * @class Codex.Framework.Types.IStore$1
     */
    Bridge.definei("Codex.Framework.Types.IStore$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define("Codex.GeneratedClassNameAttribute", {
        inherits: [System.Attribute],
        fields: {
            Name: null
        },
        ctors: {
            ctor: function (name) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Name = name;
            }
        }
    });

    Bridge.define("Codex.IRepoScopeEntity", {
        $kind: "interface"
    });

    /**
     * Marker interface for searchable entities
     TODO: Consider moving {@link } out if its not needed by all searchable entities
     *
     * @abstract
     * @public
     * @class Codex.ISearchEntity
     */
    Bridge.define("Codex.ISearchEntity", {
        $kind: "interface"
    });

    /**
     * Describes a branch in a repository
     *
     * @abstract
     * @public
     * @class Codex.IBranch
     */
    Bridge.define("Codex.IBranch", {
        $kind: "interface"
    });

    Bridge.define("Codex.IClassificationList", {
        $kind: "interface"
    });

    Bridge.define("Codex.ISpan", {
        $kind: "interface"
    });

    /**
     * Describes styling for a given classification
     *
     * @abstract
     * @public
     * @class Codex.IClassificationStyle
     */
    Bridge.define("Codex.IClassificationStyle", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReview", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewComment", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewCommentThread", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewerInfo", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewIteration", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeSymbol", {
        $kind: "interface"
    });

    /**
     * Represents a version of a repository file for a commit
     *
     * @abstract
     * @public
     * @class Codex.ICommitFileLink
     */
    Bridge.define("Codex.ICommitFileLink", {
        $kind: "interface"
    });

    /**
     * Defines documentation about a symbol
     *
     * @abstract
     * @public
     * @class Codex.IDocumentationInfo
     */
    Bridge.define("Codex.IDocumentationInfo", {
        $kind: "interface"
    });

    /**
     * Describes encoding so that file may be reconstituted in a byte-identical form
     *
     * @abstract
     * @public
     * @class Codex.IEncodingDescription
     */
    Bridge.define("Codex.IEncodingDescription", {
        $kind: "interface"
    });

    Bridge.define("Codex.IFileStatistics", {
        $kind: "interface"
    });

    Bridge.define("Codex.ILanguageInfo", {
        $kind: "interface"
    });

    Bridge.definei("Codex.IMutable$2", function (TMutable, TImmutable) { return {
        $kind: "interface"
    }; });

    /**
     * Indicates stages for which the given property should be included
     *
     * @public
     * @class Codex.IncludeAttribute
     * @augments System.Attribute
     */
    Bridge.define("Codex.IncludeAttribute", {
        inherits: [System.Attribute],
        fields: {
            AllowedStages: 0
        },
        ctors: {
            ctor: function (stages) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.AllowedStages = stages;
            }
        }
    });

    Bridge.define("Codex.IOutliningRegion", {
        $kind: "interface"
    });

    /**
     * Documentation for a method parameter
     *
     * @abstract
     * @public
     * @class Codex.IParameterDocumentation
     */
    Bridge.define("Codex.IParameterDocumentation", {
        $kind: "interface"
    });

    Bridge.define("Codex.IPropertyMap", {
        $kind: "interface"
    });

    Bridge.define("Codex.IReferencedProject", {
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceList", {
        $kind: "interface"
    });

    Bridge.define("Codex.IRepository", {
        $kind: "interface"
    });

    Bridge.define("Codex.IRepositoryReference", {
        $kind: "interface"
    });

    /**
     * Information for creating an ICodexRepositoryStore
     *
     * @abstract
     * @public
     * @class Codex.IRepositoryStoreInfo
     */
    Bridge.define("Codex.IRepositoryStoreInfo", {
        $kind: "interface"
    });

    /**
     * Information about a source file as defined by the source control provider
     *
     * @abstract
     * @public
     * @class Codex.ISourceControlFileInfo
     */
    Bridge.define("Codex.ISourceControlFileInfo", {
        $kind: "interface"
    });

    /**
     * Defines text contents of a file and associated data
     *
     * @abstract
     * @public
     * @class Codex.ISourceFile
     */
    Bridge.define("Codex.ISourceFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.IStoredBoundSourceFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.ISymbolLineSpanList", {
        $kind: "interface"
    });

    Bridge.define("Codex.MutableExtensions");

    Bridge.define("Codex.ObjectModel.CodexTypeUtilities", {
        statics: {
            fields: {
                s_typeMappings: null
            },
            ctors: {
                init: function () {
                    this.s_typeMappings = Codex.ObjectModel.CodexTypeUtilities.CreateTypeMapping();
                }
            },
            methods: {
                CreateTypeMapping: function () {
                    var typeMapping = new (System.Collections.Generic.Dictionary$2(Function,Function))();
                    typeMapping.add(Codex.ICommit, Codex.ObjectModel.Commit);
                    typeMapping.add(Codex.ObjectModel.Commit, Codex.ICommit);
                    typeMapping.add(Codex.ICommitChangedFile, Codex.ObjectModel.CommitChangedFile);
                    typeMapping.add(Codex.ObjectModel.CommitChangedFile, Codex.ICommitChangedFile);
                    typeMapping.add(Codex.ICommitFileLink, Codex.ObjectModel.CommitFileLink);
                    typeMapping.add(Codex.ObjectModel.CommitFileLink, Codex.ICommitFileLink);
                    typeMapping.add(Codex.IBranch, Codex.ObjectModel.Branch);
                    typeMapping.add(Codex.ObjectModel.Branch, Codex.IBranch);
                    typeMapping.add(Codex.IBoundSourceFile, Codex.ObjectModel.BoundSourceFile);
                    typeMapping.add(Codex.ObjectModel.BoundSourceFile, Codex.IBoundSourceFile);
                    typeMapping.add(Codex.IBoundSourceInfo, Codex.ObjectModel.BoundSourceInfo);
                    typeMapping.add(Codex.ObjectModel.BoundSourceInfo, Codex.IBoundSourceInfo);
                    typeMapping.add(Codex.ISourceControlFileInfo, Codex.ObjectModel.SourceControlFileInfo);
                    typeMapping.add(Codex.ObjectModel.SourceControlFileInfo, Codex.ISourceControlFileInfo);
                    typeMapping.add(Codex.ISourceFileInfo, Codex.ObjectModel.SourceFileInfo);
                    typeMapping.add(Codex.ObjectModel.SourceFileInfo, Codex.ISourceFileInfo);
                    typeMapping.add(Codex.IEncodingDescription, Codex.ObjectModel.EncodingDescription);
                    typeMapping.add(Codex.ObjectModel.EncodingDescription, Codex.IEncodingDescription);
                    typeMapping.add(Codex.ISourceFile, Codex.ObjectModel.SourceFile);
                    typeMapping.add(Codex.ObjectModel.SourceFile, Codex.ISourceFile);
                    typeMapping.add(Codex.IOutliningRegion, Codex.ObjectModel.OutliningRegion);
                    typeMapping.add(Codex.ObjectModel.OutliningRegion, Codex.IOutliningRegion);
                    typeMapping.add(Codex.IDefinitionSpan, Codex.ObjectModel.DefinitionSpan);
                    typeMapping.add(Codex.ObjectModel.DefinitionSpan, Codex.IDefinitionSpan);
                    typeMapping.add(Codex.IParameterDefinitionSpan, Codex.ObjectModel.ParameterDefinitionSpan);
                    typeMapping.add(Codex.ObjectModel.ParameterDefinitionSpan, Codex.IParameterDefinitionSpan);
                    typeMapping.add(Codex.IReferenceSpan, Codex.ObjectModel.ReferenceSpan);
                    typeMapping.add(Codex.ObjectModel.ReferenceSpan, Codex.IReferenceSpan);
                    typeMapping.add(Codex.IParameterReferenceSpan, Codex.ObjectModel.ParameterReferenceSpan);
                    typeMapping.add(Codex.ObjectModel.ParameterReferenceSpan, Codex.IParameterReferenceSpan);
                    typeMapping.add(Codex.IClassificationSpan, Codex.ObjectModel.ClassificationSpan);
                    typeMapping.add(Codex.ObjectModel.ClassificationSpan, Codex.IClassificationSpan);
                    typeMapping.add(Codex.ISymbolSpan, Codex.ObjectModel.SymbolSpan);
                    typeMapping.add(Codex.ObjectModel.SymbolSpan, Codex.ISymbolSpan);
                    typeMapping.add(Codex.ITextLineSpan, Codex.ObjectModel.TextLineSpan);
                    typeMapping.add(Codex.ObjectModel.TextLineSpan, Codex.ITextLineSpan);
                    typeMapping.add(Codex.ILineSpan, Codex.ObjectModel.LineSpan);
                    typeMapping.add(Codex.ObjectModel.LineSpan, Codex.ILineSpan);
                    typeMapping.add(Codex.ISpan, Codex.ObjectModel.Span);
                    typeMapping.add(Codex.ObjectModel.Span, Codex.ISpan);
                    typeMapping.add(Codex.ICodeReview, Codex.ObjectModel.CodeReview);
                    typeMapping.add(Codex.ObjectModel.CodeReview, Codex.ICodeReview);
                    typeMapping.add(Codex.ICodeReviewIteration, Codex.ObjectModel.CodeReviewIteration);
                    typeMapping.add(Codex.ObjectModel.CodeReviewIteration, Codex.ICodeReviewIteration);
                    typeMapping.add(Codex.ICodeReviewerInfo, Codex.ObjectModel.CodeReviewerInfo);
                    typeMapping.add(Codex.ObjectModel.CodeReviewerInfo, Codex.ICodeReviewerInfo);
                    typeMapping.add(Codex.ICodeReviewFile, Codex.ObjectModel.CodeReviewFile);
                    typeMapping.add(Codex.ObjectModel.CodeReviewFile, Codex.ICodeReviewFile);
                    typeMapping.add(Codex.ICodeReviewCommentThread, Codex.ObjectModel.CodeReviewCommentThread);
                    typeMapping.add(Codex.ObjectModel.CodeReviewCommentThread, Codex.ICodeReviewCommentThread);
                    typeMapping.add(Codex.ICodeReviewComment, Codex.ObjectModel.CodeReviewComment);
                    typeMapping.add(Codex.ObjectModel.CodeReviewComment, Codex.ICodeReviewComment);
                    typeMapping.add(Codex.ILanguageInfo, Codex.ObjectModel.LanguageInfo);
                    typeMapping.add(Codex.ObjectModel.LanguageInfo, Codex.ILanguageInfo);
                    typeMapping.add(Codex.IClassificationStyle, Codex.ObjectModel.ClassificationStyle);
                    typeMapping.add(Codex.ObjectModel.ClassificationStyle, Codex.IClassificationStyle);
                    typeMapping.add(Codex.IProject, Codex.ObjectModel.AnalyzedProject);
                    typeMapping.add(Codex.ObjectModel.AnalyzedProject, Codex.IProject);
                    typeMapping.add(Codex.IReferencedProject, Codex.ObjectModel.ReferencedProject);
                    typeMapping.add(Codex.ObjectModel.ReferencedProject, Codex.IReferencedProject);
                    typeMapping.add(Codex.IProjectFileLink, Codex.ObjectModel.ProjectFileLink);
                    typeMapping.add(Codex.ObjectModel.ProjectFileLink, Codex.IProjectFileLink);
                    typeMapping.add(Codex.IDocumentationInfo, Codex.ObjectModel.DocumentationInfo);
                    typeMapping.add(Codex.ObjectModel.DocumentationInfo, Codex.IDocumentationInfo);
                    typeMapping.add(Codex.IParameterDocumentation, Codex.ObjectModel.ParameterDocumentation);
                    typeMapping.add(Codex.ObjectModel.ParameterDocumentation, Codex.IParameterDocumentation);
                    typeMapping.add(Codex.ITypedParameterDocumentation, Codex.ObjectModel.TypedParameterDocumentation);
                    typeMapping.add(Codex.ObjectModel.TypedParameterDocumentation, Codex.ITypedParameterDocumentation);
                    typeMapping.add(Codex.IDocumentationReferenceSymbol, Codex.ObjectModel.DocumentationReferenceSymbol);
                    typeMapping.add(Codex.ObjectModel.DocumentationReferenceSymbol, Codex.IDocumentationReferenceSymbol);
                    typeMapping.add(Codex.IPropertySearchModel, Codex.ObjectModel.PropertySearchModel);
                    typeMapping.add(Codex.ObjectModel.PropertySearchModel, Codex.IPropertySearchModel);
                    typeMapping.add(Codex.IPropertyMap, Codex.ObjectModel.PropertyMap);
                    typeMapping.add(Codex.ObjectModel.PropertyMap, Codex.IPropertyMap);
                    typeMapping.add(Codex.IRepository, Codex.ObjectModel.Repository);
                    typeMapping.add(Codex.ObjectModel.Repository, Codex.IRepository);
                    typeMapping.add(Codex.IRepositoryReference, Codex.ObjectModel.RepositoryReference);
                    typeMapping.add(Codex.ObjectModel.RepositoryReference, Codex.IRepositoryReference);
                    typeMapping.add(Codex.ISearchEntity, Codex.ObjectModel.SearchEntity);
                    typeMapping.add(Codex.ObjectModel.SearchEntity, Codex.ISearchEntity);
                    typeMapping.add(Codex.IRepoScopeEntity, Codex.ObjectModel.RepoScopeEntity);
                    typeMapping.add(Codex.ObjectModel.RepoScopeEntity, Codex.IRepoScopeEntity);
                    typeMapping.add(Codex.ICommitScopeEntity, Codex.ObjectModel.CommitScopeEntity);
                    typeMapping.add(Codex.ObjectModel.CommitScopeEntity, Codex.ICommitScopeEntity);
                    typeMapping.add(Codex.IProjectScopeEntity, Codex.ObjectModel.ProjectScopeEntity);
                    typeMapping.add(Codex.ObjectModel.ProjectScopeEntity, Codex.IProjectScopeEntity);
                    typeMapping.add(Codex.IRepoFileScopeEntity, Codex.ObjectModel.RepoFileScopeEntity);
                    typeMapping.add(Codex.ObjectModel.RepoFileScopeEntity, Codex.IRepoFileScopeEntity);
                    typeMapping.add(Codex.IProjectFileScopeEntity, Codex.ObjectModel.ProjectFileScopeEntity);
                    typeMapping.add(Codex.ObjectModel.ProjectFileScopeEntity, Codex.IProjectFileScopeEntity);
                    typeMapping.add(Codex.IRegisteredEntity, Codex.ObjectModel.RegisteredEntity);
                    typeMapping.add(Codex.ObjectModel.RegisteredEntity, Codex.IRegisteredEntity);
                    typeMapping.add(Codex.IStoredFilter, Codex.ObjectModel.StoredFilter);
                    typeMapping.add(Codex.ObjectModel.StoredFilter, Codex.IStoredFilter);
                    typeMapping.add(Codex.IDefinitionSearchModel, Codex.ObjectModel.DefinitionSearchModel);
                    typeMapping.add(Codex.ObjectModel.DefinitionSearchModel, Codex.IDefinitionSearchModel);
                    typeMapping.add(Codex.ILanguageSearchModel, Codex.ObjectModel.LanguageSearchModel);
                    typeMapping.add(Codex.ObjectModel.LanguageSearchModel, Codex.ILanguageSearchModel);
                    typeMapping.add(Codex.IReferenceSearchModel, Codex.ObjectModel.ReferenceSearchModel);
                    typeMapping.add(Codex.ObjectModel.ReferenceSearchModel, Codex.IReferenceSearchModel);
                    typeMapping.add(Codex.ISourceSearchModelBase, Codex.ObjectModel.SourceSearchModelBase);
                    typeMapping.add(Codex.ObjectModel.SourceSearchModelBase, Codex.ISourceSearchModelBase);
                    typeMapping.add(Codex.IBoundSourceSearchModel, Codex.ObjectModel.BoundSourceSearchModel);
                    typeMapping.add(Codex.ObjectModel.BoundSourceSearchModel, Codex.IBoundSourceSearchModel);
                    typeMapping.add(Codex.ITextSourceSearchModel, Codex.ObjectModel.TextSourceSearchModel);
                    typeMapping.add(Codex.ObjectModel.TextSourceSearchModel, Codex.ITextSourceSearchModel);
                    typeMapping.add(Codex.IRepositorySearchModel, Codex.ObjectModel.RepositorySearchModel);
                    typeMapping.add(Codex.ObjectModel.RepositorySearchModel, Codex.IRepositorySearchModel);
                    typeMapping.add(Codex.IProjectSearchModel, Codex.ObjectModel.ProjectSearchModel);
                    typeMapping.add(Codex.ObjectModel.ProjectSearchModel, Codex.IProjectSearchModel);
                    typeMapping.add(Codex.IProjectReferenceSearchModel, Codex.ObjectModel.ProjectReferenceSearchModel);
                    typeMapping.add(Codex.ObjectModel.ProjectReferenceSearchModel, Codex.IProjectReferenceSearchModel);
                    typeMapping.add(Codex.ICommitSearchModel, Codex.ObjectModel.CommitSearchModel);
                    typeMapping.add(Codex.ObjectModel.CommitSearchModel, Codex.ICommitSearchModel);
                    typeMapping.add(Codex.ICommitFilesSearchModel, Codex.ObjectModel.CommitFilesSearchModel);
                    typeMapping.add(Codex.ObjectModel.CommitFilesSearchModel, Codex.ICommitFilesSearchModel);
                    typeMapping.add(Codex.IFileStatistics, Codex.ObjectModel.FileStatistics);
                    typeMapping.add(Codex.ObjectModel.FileStatistics, Codex.IFileStatistics);
                    typeMapping.add(Codex.IRepositoryStoreInfo, Codex.ObjectModel.RepositoryStoreInfo);
                    typeMapping.add(Codex.ObjectModel.RepositoryStoreInfo, Codex.IRepositoryStoreInfo);
                    typeMapping.add(Codex.ICommitFilesDirectory, Codex.ObjectModel.CommitFilesDirectory);
                    typeMapping.add(Codex.ObjectModel.CommitFilesDirectory, Codex.ICommitFilesDirectory);
                    typeMapping.add(Codex.IStoredBoundSourceFile, Codex.ObjectModel.StoredBoundSourceFile);
                    typeMapping.add(Codex.ObjectModel.StoredBoundSourceFile, Codex.IStoredBoundSourceFile);
                    typeMapping.add(Codex.IDefinitionSymbol, Codex.ObjectModel.DefinitionSymbol);
                    typeMapping.add(Codex.ObjectModel.DefinitionSymbol, Codex.IDefinitionSymbol);
                    typeMapping.add(Codex.IReferenceSymbol, Codex.ObjectModel.ReferenceSymbol);
                    typeMapping.add(Codex.ObjectModel.ReferenceSymbol, Codex.IReferenceSymbol);
                    typeMapping.add(Codex.ICodeSymbol, Codex.ObjectModel.Symbol);
                    typeMapping.add(Codex.ObjectModel.Symbol, Codex.ICodeSymbol);
                    typeMapping.add(Codex.Sdk.Search.ITextLineSpanResult, Codex.ObjectModel.TextLineSpanResult);
                    typeMapping.add(Codex.ObjectModel.TextLineSpanResult, Codex.Sdk.Search.ITextLineSpanResult);
                    typeMapping.add(Codex.Sdk.Search.ISearchResult, Codex.ObjectModel.SearchResult);
                    typeMapping.add(Codex.ObjectModel.SearchResult, Codex.Sdk.Search.ISearchResult);
                    typeMapping.add(Codex.Sdk.Search.IIndex, Codex.ObjectModel.Index);
                    typeMapping.add(Codex.ObjectModel.Index, Codex.Sdk.Search.IIndex);
                    return typeMapping;
                }
            }
        }
    });

    /** @namespace Codex.ObjectModel */

    /**
     * Allows defining extension data during analysis
     *
     * @public
     * @class Codex.ObjectModel.ExtensionData
     */
    Bridge.define("Codex.ObjectModel.ExtensionData");

    /**
     * Defines Codex glyphs
     *
     * @public
     * @class Codex.ObjectModel.Glyph
     */
    Bridge.define("Codex.ObjectModel.Glyph", {
        $kind: "enum",
        statics: {
            fields: {
                Unknown: -1,
                Assembly: 0,
                BasicFile: 1,
                BasicProject: 2,
                ClassPublic: 3,
                ClassProtected: 4,
                ClassPrivate: 5,
                ClassInternal: 6,
                CSharpFile: 7,
                CSharpProject: 8,
                ConstantPublic: 9,
                ConstantProtected: 10,
                ConstantPrivate: 11,
                ConstantInternal: 12,
                DelegatePublic: 13,
                DelegateProtected: 14,
                DelegatePrivate: 15,
                DelegateInternal: 16,
                EnumPublic: 17,
                EnumProtected: 18,
                EnumPrivate: 19,
                EnumInternal: 20,
                EnumMember: 21,
                Error: 22,
                EventPublic: 23,
                EventProtected: 24,
                EventPrivate: 25,
                EventInternal: 26,
                ExtensionMethodPublic: 27,
                ExtensionMethodProtected: 28,
                ExtensionMethodPrivate: 29,
                ExtensionMethodInternal: 30,
                FieldPublic: 31,
                FieldProtected: 32,
                FieldPrivate: 33,
                FieldInternal: 34,
                InterfacePublic: 35,
                InterfaceProtected: 36,
                InterfacePrivate: 37,
                InterfaceInternal: 38,
                Intrinsic: 39,
                Keyword: 40,
                Label: 41,
                Local: 42,
                Namespace: 43,
                MethodPublic: 44,
                MethodProtected: 45,
                MethodPrivate: 46,
                MethodInternal: 47,
                ModulePublic: 48,
                ModuleProtected: 49,
                ModulePrivate: 50,
                ModuleInternal: 51,
                OpenFolder: 52,
                Operator: 53,
                Parameter: 54,
                PropertyPublic: 55,
                PropertyProtected: 56,
                PropertyPrivate: 57,
                PropertyInternal: 58,
                RangeVariable: 59,
                Reference: 60,
                StructurePublic: 61,
                StructureProtected: 62,
                StructurePrivate: 63,
                StructureInternal: 64,
                TypeParameter: 65,
                Up: 66,
                Down: 67,
                Left: 68,
                Right: 69,
                Dot: 70,
                Snippet: 71
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities", {
        statics: {
            methods: {
                GetGlyphNumber: function (glyph) {
                    var result = (((((Codex.ObjectModel.GlyphUtilities.GetStandardGlyphGroup(glyph)) & 65535) + ((Codex.ObjectModel.GlyphUtilities.GetStandardGlyphItem(glyph)) & 65535)) | 0)) & 65535;
                    return result;
                },
                GetStandardGlyphGroup: function (glyph) {
                    switch (glyph) {
                        case Codex.ObjectModel.Glyph.Assembly: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphAssembly;
                        case Codex.ObjectModel.Glyph.ClassPublic: 
                        case Codex.ObjectModel.Glyph.ClassProtected: 
                        case Codex.ObjectModel.Glyph.ClassPrivate: 
                        case Codex.ObjectModel.Glyph.ClassInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupClass;
                        case Codex.ObjectModel.Glyph.ConstantPublic: 
                        case Codex.ObjectModel.Glyph.ConstantProtected: 
                        case Codex.ObjectModel.Glyph.ConstantPrivate: 
                        case Codex.ObjectModel.Glyph.ConstantInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupConstant;
                        case Codex.ObjectModel.Glyph.CSharpFile: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphCSharpFile;
                        case Codex.ObjectModel.Glyph.DelegatePublic: 
                        case Codex.ObjectModel.Glyph.DelegateProtected: 
                        case Codex.ObjectModel.Glyph.DelegatePrivate: 
                        case Codex.ObjectModel.Glyph.DelegateInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupDelegate;
                        case Codex.ObjectModel.Glyph.EnumPublic: 
                        case Codex.ObjectModel.Glyph.EnumProtected: 
                        case Codex.ObjectModel.Glyph.EnumPrivate: 
                        case Codex.ObjectModel.Glyph.EnumInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEnum;
                        case Codex.ObjectModel.Glyph.EnumMember: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEnumMember;
                        case Codex.ObjectModel.Glyph.Error: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupError;
                        case Codex.ObjectModel.Glyph.ExtensionMethodPublic: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethod;
                        case Codex.ObjectModel.Glyph.ExtensionMethodProtected: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodProtected;
                        case Codex.ObjectModel.Glyph.ExtensionMethodPrivate: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodPrivate;
                        case Codex.ObjectModel.Glyph.ExtensionMethodInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodInternal;
                        case Codex.ObjectModel.Glyph.EventPublic: 
                        case Codex.ObjectModel.Glyph.EventProtected: 
                        case Codex.ObjectModel.Glyph.EventPrivate: 
                        case Codex.ObjectModel.Glyph.EventInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEvent;
                        case Codex.ObjectModel.Glyph.FieldPublic: 
                        case Codex.ObjectModel.Glyph.FieldProtected: 
                        case Codex.ObjectModel.Glyph.FieldPrivate: 
                        case Codex.ObjectModel.Glyph.FieldInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupField;
                        case Codex.ObjectModel.Glyph.InterfacePublic: 
                        case Codex.ObjectModel.Glyph.InterfaceProtected: 
                        case Codex.ObjectModel.Glyph.InterfacePrivate: 
                        case Codex.ObjectModel.Glyph.InterfaceInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupInterface;
                        case Codex.ObjectModel.Glyph.Intrinsic: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupIntrinsic;
                        case Codex.ObjectModel.Glyph.Keyword: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphKeyword;
                        case Codex.ObjectModel.Glyph.Label: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupIntrinsic;
                        case Codex.ObjectModel.Glyph.Local: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.Namespace: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupNamespace;
                        case Codex.ObjectModel.Glyph.MethodPublic: 
                        case Codex.ObjectModel.Glyph.MethodProtected: 
                        case Codex.ObjectModel.Glyph.MethodPrivate: 
                        case Codex.ObjectModel.Glyph.MethodInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupMethod;
                        case Codex.ObjectModel.Glyph.ModulePublic: 
                        case Codex.ObjectModel.Glyph.ModuleProtected: 
                        case Codex.ObjectModel.Glyph.ModulePrivate: 
                        case Codex.ObjectModel.Glyph.ModuleInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupModule;
                        case Codex.ObjectModel.Glyph.OpenFolder: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphOpenFolder;
                        case Codex.ObjectModel.Glyph.Operator: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupOperator;
                        case Codex.ObjectModel.Glyph.Parameter: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.PropertyPublic: 
                        case Codex.ObjectModel.Glyph.PropertyProtected: 
                        case Codex.ObjectModel.Glyph.PropertyPrivate: 
                        case Codex.ObjectModel.Glyph.PropertyInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupProperty;
                        case Codex.ObjectModel.Glyph.RangeVariable: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.Reference: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphReference;
                        case Codex.ObjectModel.Glyph.StructurePublic: 
                        case Codex.ObjectModel.Glyph.StructureProtected: 
                        case Codex.ObjectModel.Glyph.StructurePrivate: 
                        case Codex.ObjectModel.Glyph.StructureInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupStruct;
                        case Codex.ObjectModel.Glyph.TypeParameter: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupType;
                        case Codex.ObjectModel.Glyph.Up: 
                        case Codex.ObjectModel.Glyph.Down: 
                        case Codex.ObjectModel.Glyph.Left: 
                        case Codex.ObjectModel.Glyph.Right: 
                        case Codex.ObjectModel.Glyph.Dot: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphArrow;
                        default: 
                            throw new System.ArgumentException("glyph");
                    }
                },
                GetStandardGlyphItem: function (icon) {
                    switch (icon) {
                        case Codex.ObjectModel.Glyph.ClassProtected: 
                        case Codex.ObjectModel.Glyph.ConstantProtected: 
                        case Codex.ObjectModel.Glyph.DelegateProtected: 
                        case Codex.ObjectModel.Glyph.EnumProtected: 
                        case Codex.ObjectModel.Glyph.EventProtected: 
                        case Codex.ObjectModel.Glyph.FieldProtected: 
                        case Codex.ObjectModel.Glyph.InterfaceProtected: 
                        case Codex.ObjectModel.Glyph.MethodProtected: 
                        case Codex.ObjectModel.Glyph.ModuleProtected: 
                        case Codex.ObjectModel.Glyph.PropertyProtected: 
                        case Codex.ObjectModel.Glyph.StructureProtected: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemProtected;
                        case Codex.ObjectModel.Glyph.ClassPrivate: 
                        case Codex.ObjectModel.Glyph.ConstantPrivate: 
                        case Codex.ObjectModel.Glyph.DelegatePrivate: 
                        case Codex.ObjectModel.Glyph.EnumPrivate: 
                        case Codex.ObjectModel.Glyph.EventPrivate: 
                        case Codex.ObjectModel.Glyph.FieldPrivate: 
                        case Codex.ObjectModel.Glyph.InterfacePrivate: 
                        case Codex.ObjectModel.Glyph.MethodPrivate: 
                        case Codex.ObjectModel.Glyph.ModulePrivate: 
                        case Codex.ObjectModel.Glyph.PropertyPrivate: 
                        case Codex.ObjectModel.Glyph.StructurePrivate: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemPrivate;
                        case Codex.ObjectModel.Glyph.ClassInternal: 
                        case Codex.ObjectModel.Glyph.ConstantInternal: 
                        case Codex.ObjectModel.Glyph.DelegateInternal: 
                        case Codex.ObjectModel.Glyph.EnumInternal: 
                        case Codex.ObjectModel.Glyph.EventInternal: 
                        case Codex.ObjectModel.Glyph.FieldInternal: 
                        case Codex.ObjectModel.Glyph.InterfaceInternal: 
                        case Codex.ObjectModel.Glyph.MethodInternal: 
                        case Codex.ObjectModel.Glyph.ModuleInternal: 
                        case Codex.ObjectModel.Glyph.PropertyInternal: 
                        case Codex.ObjectModel.Glyph.StructureInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemFriend;
                        default: 
                            // We don't want any overlays
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemPublic;
                    }
                }
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup", {
        $kind: "enum",
        statics: {
            fields: {
                GlyphGroupClass: 0,
                GlyphGroupConstant: 6,
                GlyphGroupDelegate: 12,
                GlyphGroupEnum: 18,
                GlyphGroupEnumMember: 24,
                GlyphGroupEvent: 30,
                GlyphGroupException: 36,
                GlyphGroupField: 42,
                GlyphGroupInterface: 48,
                GlyphGroupMacro: 54,
                GlyphGroupMap: 60,
                GlyphGroupMapItem: 66,
                GlyphGroupMethod: 72,
                GlyphGroupOverload: 78,
                GlyphGroupModule: 84,
                GlyphGroupNamespace: 90,
                GlyphGroupOperator: 96,
                GlyphGroupProperty: 102,
                GlyphGroupStruct: 108,
                GlyphGroupTemplate: 114,
                GlyphGroupTypedef: 120,
                GlyphGroupType: 126,
                GlyphGroupUnion: 132,
                GlyphGroupVariable: 138,
                GlyphGroupValueType: 144,
                GlyphGroupIntrinsic: 150,
                GlyphGroupJSharpMethod: 156,
                GlyphGroupJSharpField: 162,
                GlyphGroupJSharpClass: 168,
                GlyphGroupJSharpNamespace: 174,
                GlyphGroupJSharpInterface: 180,
                GlyphGroupError: 186,
                GlyphBscFile: 191,
                GlyphAssembly: 192,
                GlyphLibrary: 193,
                GlyphVBProject: 194,
                GlyphCoolProject: 196,
                GlyphCppProject: 199,
                GlyphDialogId: 200,
                GlyphOpenFolder: 201,
                GlyphClosedFolder: 202,
                GlyphArrow: 203,
                GlyphCSharpFile: 204,
                GlyphCSharpExpansion: 205,
                GlyphKeyword: 206,
                GlyphInformation: 207,
                GlyphReference: 208,
                GlyphRecursion: 209,
                GlyphXmlItem: 210,
                GlyphJSharpProject: 211,
                GlyphJSharpDocument: 212,
                GlyphForwardType: 213,
                GlyphCallersGraph: 214,
                GlyphCallGraph: 215,
                GlyphWarning: 216,
                GlyphMaybeReference: 217,
                GlyphMaybeCaller: 218,
                GlyphMaybeCall: 219,
                GlyphExtensionMethod: 220,
                GlyphExtensionMethodInternal: 221,
                GlyphExtensionMethodFriend: 222,
                GlyphExtensionMethodProtected: 223,
                GlyphExtensionMethodPrivate: 224,
                GlyphExtensionMethodShortcut: 225,
                GlyphXmlAttribute: 226,
                GlyphXmlChild: 227,
                GlyphXmlDescendant: 228,
                GlyphXmlNamespace: 229,
                GlyphXmlAttributeQuestion: 230,
                GlyphXmlAttributeCheck: 231,
                GlyphXmlChildQuestion: 232,
                GlyphXmlChildCheck: 233,
                GlyphXmlDescendantQuestion: 234,
                GlyphXmlDescendantCheck: 235,
                GlyphCompletionWarning: 236,
                GlyphGroupUnknown: 237
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities.StandardGlyphItem", {
        $kind: "enum",
        statics: {
            fields: {
                GlyphItemPublic: 0,
                GlyphItemInternal: 1,
                GlyphItemFriend: 2,
                GlyphItemProtected: 3,
                GlyphItemPrivate: 4,
                GlyphItemShortcut: 5,
                TotalGlyphItems: 6
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.IIndex", {
        $kind: "interface"
    });

    /**
     * Defines standard set of project kinds
     *
     * @public
     * @class Codex.ObjectModel.ProjectKind
     */
    Bridge.define("Codex.ObjectModel.ProjectKind", {
        $kind: "enum",
        statics: {
            fields: {
                Source: 0,
                MetadataAsSource: 1,
                Decompilation: 2
            }
        }
    });

    /**
     * Defines standard set of reference kinds
     *
     * @public
     * @class Codex.ObjectModel.ReferenceKind
     */
    Bridge.define("Codex.ObjectModel.ReferenceKind", {
        $kind: "enum",
        statics: {
            fields: {
                Definition: 0,
                /**
                 * This represents a constructor declaration for the given type. This is different than
                 instantiation which actually represents a call to the constructor
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 1
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Constructor: 1,
                /**
                 * A call to the constructor of the type referenced by the symbol. This is different than
                 constructor which is the actual declaration for a constructor for the type symbol.
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 2
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Instantiation: 2,
                DerivedType: 3,
                InterfaceInheritance: 4,
                InterfaceImplementation: 5,
                Override: 6,
                InterfaceMemberImplementation: 7,
                Write: 8,
                Read: 9,
                GuidUsage: 10,
                UsingDispose: 11,
                /**
                 * The symbol is the return type of a method or property getter
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 12
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                ReturnType: 12,
                EmptyArrayAllocation: 13,
                MSBuildPropertyAssignment: 14,
                MSBuildPropertyUsage: 15,
                MSBuildItemAssignment: 16,
                MSBuildItemUsage: 17,
                MSBuildTargetDeclaration: 18,
                MSBuildTargetUsage: 19,
                MSBuildTaskDeclaration: 20,
                MSBuildTaskUsage: 21,
                Text: 22,
                ProjectLevelReference: 23,
                /**
                 * Catch-all reference comes after more specific reference kinds
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 24
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Reference: 24
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.ISearchResult", {
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.SymbolId", {
        inherits: function () { return [System.IEquatable$1(Codex.ObjectModel.SymbolId)]; },
        $kind: "struct",
        statics: {
            methods: {
                UnsafeCreateWithValue: function (value) {
                    return new Codex.ObjectModel.SymbolId.$ctor2(value, true);
                },
                getDefaultValue: function () { return new Codex.ObjectModel.SymbolId(); }
            }
        },
        fields: {
            Value: null
        },
        alias: ["equalsT", "System$IEquatable$1$Codex$ObjectModel$SymbolId$equalsT"],
        ctors: {
            $ctor1: function (value) {
                this.$initialize();
                this.Value = value;
            },
            $ctor2: function (value, ignored) {
                this.$initialize();
                this.Value = value;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equalsT: function (other) {
                return Bridge.referenceEquals(this.Value, other.Value);
            },
            toString: function () {
                return this.Value;
            },
            getHashCode: function () {
                var h = Bridge.addHash([3333875138, this.Value]);
                return h;
            },
            $clone: function (to) {
                var s = to || new Codex.ObjectModel.SymbolId();
                s.Value = this.Value;
                return s;
            }
        }
    });

    Bridge.define("Codex.ObjectStage", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Analysis: 1,
                Index: 2,
                Search: 4,
                All: 7
            }
        }
    });

    Bridge.define("Codex.PlaceholderAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.QueryAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.ReadOnlyListAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.RequiredForAttribute", {
        inherits: [System.Attribute],
        fields: {
            Stages: 0
        },
        ctors: {
            ctor: function (stages) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Stages = stages;
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.IndexFilter$1", function (T) { return {
        statics: {
            methods: {
                op_BitwiseAnd: function (left, right) {
                    return new (Codex.Sdk.Search.BinaryFilter$1(T))(Codex.Sdk.Search.BinaryOperator.And, left, right);
                },
                op_BitwiseOr: function (left, right) {
                    return new (Codex.Sdk.Search.BinaryFilter$1(T))(Codex.Sdk.Search.BinaryOperator.Or, left, right);
                }
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.BinaryOperator", {
        $kind: "enum",
        statics: {
            fields: {
                And: 0,
                Or: 1
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.CodexArgumentsBase", {
        fields: {
            /**
             * The maximum number of results to return
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.CodexArgumentsBase
             * @default 100
             * @type number
             */
            MaxResults: 0
        },
        ctors: {
            init: function () {
                this.MaxResults = 100;
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.CodexServiceMethod", {
        $kind: "enum",
        statics: {
            fields: {
                Search: 0,
                FindAllRefs: 1,
                FindDef: 2,
                FindDefLocation: 3,
                GetSource: 4
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.TermIndexProperty$1", function (T) { return {

    }; });

    /** @namespace Codex.Sdk.Search */

    /**
     * High level operations for codex
     *
     * @abstract
     * @public
     * @class Codex.Sdk.Search.ICodex
     */
    Bridge.define("Codex.Sdk.Search.ICodex", {
        $kind: "interface"
    });

    Bridge.definei("Codex.Sdk.Search.IIndexQuery$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.definei("Codex.Sdk.Search.IIndexQueryFilter$1", function (T) { return {
        $kind: "interface"
    }; });

    /**
     * High level query operations for indexed code
     *
     * @abstract
     * @public
     * @class Codex.Sdk.Search.Index$1
     */
    Bridge.define("Codex.Sdk.Search.Index$1", function (T) { return {

    }; });

    Bridge.define("Codex.Sdk.Search.IndexQuery$1", function (T) { return {
        props: {
            Filter: null,
            /**
             * The maximum number of results to return
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQuery$1
             * @function MaxResults
             * @type number
             */
            MaxResults: 0
        }
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryHits$1", function (T) { return {
        props: {
            /**
             * The total number of results matching the query. 
             NOTE: This may be greater than the number of hits returned.
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryHits$1
             * @function Total
             * @type number
             */
            Total: System.Int64(0),
            /**
             * The results of the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryHits$1
             * @function Hits
             * @type System.Collections.Generic.List$1
             */
            Hits: null
        },
        methods: {
            toString: function () {
                return System.String.format("Total: {0}, {1}", this.Total, System.Object.prototype.toString.call(this));
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryResponse", {
        props: {
            /**
             * If the query failed, this will contain the error message
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function Error
             * @type string
             */
            Error: null,
            /**
             * The raw query sent to the index server
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function RawQueries
             * @type System.Collections.Generic.List$1
             */
            RawQueries: null,
            /**
             * The spent executing the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function Duration
             * @type Codex.Sdk.Search.SerializableTimeSpan
             */
            Duration: null,
            /**
             * The spent executing the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function ServerTime
             * @type Codex.Sdk.Search.SerializableTimeSpan
             */
            ServerTime: null
        },
        ctors: {
            init: function () {
                this.Duration = new Codex.Sdk.Search.SerializableTimeSpan();
                this.ServerTime = new Codex.Sdk.Search.SerializableTimeSpan();
            }
        },
        methods: {
            toString: function () {
                return System.String.format("Error: {0}, Duration: {1}", this.Error, this.Duration.$clone());
            }
        }
    });

    Bridge.definei("Codex.Sdk.Search.ITermProperty$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define("Codex.Sdk.Search.SerializableTimeSpan", {
        $kind: "struct",
        statics: {
            methods: {
                op_Implicit$1: function (value) {
                    return value.AsTimeSpan();
                },
                op_Implicit: function (value) {
                    return new Codex.Sdk.Search.SerializableTimeSpan.$ctor1(value);
                },
                getDefaultValue: function () { return new Codex.Sdk.Search.SerializableTimeSpan(); }
            }
        },
        props: {
            Ticks: System.Int64(0)
        },
        ctors: {
            $ctor1: function (timespan) {
                this.$initialize();
                this.Ticks = timespan.getTicks();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            AsTimeSpan: function () {
                return System.TimeSpan.fromTicks(this.Ticks);
            },
            toString: function () {
                return this.AsTimeSpan().toString();
            },
            getHashCode: function () {
                var h = Bridge.addHash([9077984700, this.Ticks]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Codex.Sdk.Search.SerializableTimeSpan)) {
                    return false;
                }
                return Bridge.equals(this.Ticks, o.Ticks);
            },
            $clone: function (to) {
                var s = to || new Codex.Sdk.Search.SerializableTimeSpan();
                s.Ticks = this.Ticks;
                return s;
            }
        }
    });

    Bridge.define("Codex.SearchBehavior", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Term: 1,
                NormalizedKeyword: 2,
                Sortword: 3,
                HierarchicalPath: 4,
                FullText: 5,
                Prefix: 6,
                PrefixFullName: 7
            }
        }
    });

    Bridge.define("Codex.SearchBehaviorAttribute", {
        inherits: [System.Attribute],
        fields: {
            Behavior: 0
        },
        ctors: {
            ctor: function (behavior) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Behavior = behavior;
            }
        }
    });

    Bridge.define("Codex.SearchDescriptorInlineAttribute", {
        inherits: [System.Attribute],
        fields: {
            Inline: false
        },
        ctors: {
            ctor: function (inline) {
                if (inline === void 0) { inline = false; }

                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Inline = inline;
            }
        }
    });

    Bridge.define("Codex.SearchType", {
        statics: {
            methods: {
                Create: function (T, registeredSearchTypes, name) {
                    if (name === void 0) { name = null; }
                    var searchType = new (Codex.SearchType$1(T))(name);
                    searchType.Id = registeredSearchTypes.Count;
                    registeredSearchTypes.add(searchType);
                    return searchType;
                }
            }
        },
        props: {
            Name: null,
            IndexName: null,
            Id: 0
        }
    });

    Bridge.define("Codex.SearchTypes", {
        statics: {
            fields: {
                RegisteredSearchTypes: null,
                Definition: null,
                /**
                 * @static
                 * @public
                 * @memberof Codex.SearchTypes
                 * @type Codex.SearchType
                 */
                Reference: null,
                TextSource: null,
                BoundSource: null,
                Language: null,
                Repository: null,
                Project: null,
                Commit: null,
                CommitFiles: null,
                ProjectReference: null,
                Property: null,
                StoredFilter: null,
                RegisteredEntity: null
            },
            ctors: {
                init: function () {
                    var $t, $t1, $t2, $t3, $t4, $t5;
                    this.RegisteredSearchTypes = new (System.Collections.Generic.List$1(Codex.SearchType)).ctor();
                    this.Definition = Codex.SearchType.Create(Codex.IDefinitionSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.Reference = Codex.SearchType.Create(Codex.IReferenceSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.TextSource = Codex.SearchType.Create(Codex.ITextSourceSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.BoundSource = Codex.SearchType.Create(Codex.IBoundSourceSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.Language = Codex.SearchType.Create(Codex.ILanguageSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.Repository = Codex.SearchType.Create(Codex.IRepositorySearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.Project = Codex.SearchType.Create(Codex.IProjectSearchModel, Codex.SearchTypes.RegisteredSearchTypes).Exclude(($t = { ntype: 38, t: Codex.IProjectSearchModel, n: "sm" }, ($t5 = { ntype: 10, t: System.Object, operand: ($t4 = Bridge.getMetadata(Codex.IReferencedProject).m[0], { ntype: 23, t: $t4.rt, expression: ($t3 = {"td":System.Linq.Enumerable,"a":2,"n":"First","is":true,"t":8,"pi":[{"n":"source","pt":System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject),"ps":0}],"tpc":1,"def":function (TSource, source) { return System.Linq.Enumerable.from(source).first(); },"rt":Codex.IReferencedProject,"p":[System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject)]}, { ntype: 6, t: $t3.rt, obj: null, method: $t3, args: Bridge.toList([{ ntype: 10, t: System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject), operand: ($t2 = Bridge.getMetadata(Codex.IProject).m[2], { ntype: 23, t: $t2.rt, expression: ($t1 = Bridge.getMetadata(Codex.IProjectSearchModel).m[0], { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }), member: $t2 }) }]) }), member: $t4 }) }, { ntype: 18, t: Function, rt: $t5.t, body: $t5, p: Bridge.toList([$t]) })));
                    this.Commit = Codex.SearchType.Create(Codex.ICommitSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.CommitFiles = Codex.SearchType.Create(Codex.ICommitFilesSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.ProjectReference = Codex.SearchType.Create(Codex.IProjectReferenceSearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.Property = Codex.SearchType.Create(Codex.IPropertySearchModel, Codex.SearchTypes.RegisteredSearchTypes);
                    this.StoredFilter = Codex.SearchType.Create(Codex.IStoredFilter, Codex.SearchTypes.RegisteredSearchTypes);
                    this.RegisteredEntity = Codex.SearchType.Create(Codex.IRegisteredEntity, Codex.SearchTypes.RegisteredSearchTypes);
                }
            }
        }
    });

    Bridge.define("Codex.SerializationInterfaceAttribute", {
        inherits: [System.Attribute],
        fields: {
            Type: null
        },
        ctors: {
            ctor: function (type) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Type = type;
            }
        }
    });

    Bridge.define("Codex.Utilities.CollectionUtilities");

    Bridge.define("Codex.Utilities.CollectionUtilities.Empty$1", function (T) { return {
        statics: {
            fields: {
                List: null,
                Array: null
            },
            ctors: {
                init: function () {
                    this.List = new (System.Collections.Generic.List$1(T)).$ctor2(0);
                    this.Array = System.Array.init(0, function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                }
            }
        }
    }; });

    Bridge.define("Codex.Utilities.SerializationUtilities", {
        statics: {
            methods: {
                AssignDuplicate: function (T, value, lastValue) {
                    if (System.Collections.Generic.EqualityComparer$1(T).def.equals2(value, Bridge.getDefaultValue(T))) {
                        return lastValue.v;
                    } else {
                        lastValue.v = value;
                        return value;
                    }
                },
                RemoveDuplicate: function (T, value, lastValue) {
                    if (System.Collections.Generic.EqualityComparer$1(T).def.equals2(value, Bridge.getDefaultValue(T))) {
                        return Bridge.getDefaultValue(T);
                    } else {
                        lastValue.v = value;
                        return value;
                    }
                }
            }
        }
    });

    Bridge.define("Codex.View.App", {
        inherits: [System.Windows.Application],
        main: function Main () {
            System.Windows.ApplicationHost.Current.System$Windows$IApplicationHost$Run($asm.$.Codex.View.App.f1);
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Application.ctor.call(this);
                Codex.View.Styles.Initialize();
                // TODO: This should be configurable through build properties somehow
                Codex.View.CodexProvider.Instance = new Codex.View.Web.WebApiCodex("http://localhost:9491/api/codex/");
            }
        },
        methods: {
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/App.xaml"));
            }
        }
    });

    Bridge.ns("Codex.View.App", $asm.$);

    Bridge.apply($asm.$.Codex.View.App, {
        f1: function () {
            var application = new Codex.View.App();
            application.InitializeComponent();
            application.Run();
        }
    });

    Bridge.define("Codex.View.NotifyPropertyChangedBase", {
        inherits: [System.ComponentModel.INotifyPropertyChanged],
        events: {
            propertyChanged: null
        },
        alias: ["addPropertyChanged", "System$ComponentModel$INotifyPropertyChanged$addPropertyChanged",
        "removePropertyChanged", "System$ComponentModel$INotifyPropertyChanged$removePropertyChanged"],
        methods: {
            addPropertyChanged: function (value) {
                this.addpropertyChanged(value);
            },
            removePropertyChanged: function (value) {
                this.removepropertyChanged(value);
            },
            OnPropertyChanged: function (memberName) {
                if (memberName === void 0) { memberName = null; }
                !Bridge.staticEquals(this.propertyChanged, null) ? this.propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(memberName)) : null;
            }
        }
    });

    Bridge.define("Codex.View.LeftPaneContent", {
        $kind: "interface"
    });

    Bridge.define("Codex.View.CategoryGroupSearchResultsViewModel", {
        props: {
            HeaderVisibility: {
                get: function () {
                    return System.String.isNullOrEmpty(this.Header) ? System.Windows.Visibility.Collapsed : System.Windows.Visibility.Visible;
                }
            },
            Header: null,
            ProjectResults: null
        },
        ctors: {
            init: function () {
                this.ProjectResults = new Codex.View.ProjectResultsViewModel.ctor();
            },
            ctor: function (searchString, response) {
                this.$initialize();
                var result = response.Result;

                this.ProjectResults.ProjectGroups = System.Linq.Enumerable.from(result.Hits).select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f1).groupBy($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f2).select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f6).toList(Codex.View.ProjectGroupResultsViewModel);

                this.Header = System.String.format("{0} text search hits for '{1}'", Bridge.box(result.Hits.Count, System.Int32), searchString);
            }
        }
    });

    Bridge.ns("Codex.View.CategoryGroupSearchResultsViewModel", $asm.$);

    Bridge.apply($asm.$.Codex.View.CategoryGroupSearchResultsViewModel, {
        f1: function (sr) {
            return sr.Codex$Sdk$Search$ISearchResult$TextLine;
        },
        f2: function (sr) {
            return sr.Codex$IProjectScopeEntity$ProjectId;
        },
        f3: function (sr) {
            return sr.Codex$IProjectFileScopeEntity$ProjectRelativePath;
        },
        f4: function (sr) {
            return new Codex.View.TextSpanSearchResultViewModel(sr);
        },
        f5: function (fileGroup) {
            var $t1;
            return ($t1 = new Codex.View.FileResultsViewModel(), $t1.Path = fileGroup.key(), $t1.Items = fileGroup.select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f4).toList(Codex.View.TextSpanSearchResultViewModel), $t1);
        },
        f6: function (projectGroup) {
            var $t;
            return ($t = new Codex.View.ProjectGroupResultsViewModel(), $t.ProjectName = projectGroup.key(), $t.Items = projectGroup.groupBy($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f3).select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f5).toList(Codex.View.FileResultsViewModel), $t);
        }
    });

    Bridge.define("Codex.View.CodexProvider", {
        statics: {
            props: {
                Instance: null
            }
        }
    });

    Bridge.define("Codex.View.FileItemResultViewModel");

    Bridge.define("Codex.View.ProjectItemResultViewModel");

    Bridge.define("Codex.View.GranularExtensions", {
        statics: {
            methods: {
                AsTriggerProperty: function (dependencyProperty) {
                    return new System.Windows.DependencyPropertyPathElement(dependencyProperty);
                },
                WithSetters: function (trigger, setters) {
                    var $t;
                    if (setters === void 0) { setters = []; }
                    $t = Bridge.getEnumerator(setters);
                    try {
                        while ($t.moveNext()) {
                            var setter = $t.Current;
                            trigger.Setters.add(setter);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }
                    return trigger;
                }
            }
        }
    });

    /** @namespace Codex.View */

    /**
     * Interaction logic for LeftPane.xaml
     *
     * @public
     * @class Codex.View.LeftPaneView
     * @augments System.Windows.Controls.UserControl
     */
    Bridge.define("Codex.View.LeftPaneView", {
        inherits: [System.Windows.Controls.UserControl],
        fields: {
            SearchInfo: null,
            PaneContent: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Controls.UserControl.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/LeftPaneView.xaml"));
            }
        }
    });

    /**
     * Interaction logic for MainWindow.xaml
     *
     * @public
     * @class Codex.View.MainWindow
     * @augments System.Windows.Window
     */
    Bridge.define("Codex.View.MainWindow", {
        inherits: [System.Windows.Window],
        fields: {
            ViewModel: null,
            SearchBox: null,
            SearchBoxAndImagesColumn: null,
            HeaderMenuColumn: null,
            LeftPane: null
        },
        props: {
            CodexService: null
        },
        ctors: {
            init: function () {
                this.ViewModel = new Codex.View.ViewModelDataContext();
                this.CodexService = Codex.View.CodexProvider.Instance;
            },
            ctor: function () {
                this.$initialize();
                System.Windows.Window.ctor.call(this);
                this.InitializeComponent();
                this.DataContext = this.ViewModel;
                this.ViewModel.Initialize();
            }
        },
        methods: {
            Button_Click: function (sender, e) { },
            Grid_Loaded: function (sender, e) {
                System.Console.WriteLine("Grid_Loaded");
            },
            SearchTextChanged: function (sender, e) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    searchString, 
                    $t, 
                    response, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    searchString = this.SearchBox.Text;
                                    searchString = searchString.trim();

                                    if (searchString.length < 3) {
                                        this.ViewModel.LeftPane = ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = "Enter at least 3 characters.", $t);
                                        return;
                                    }

                                    $task1 = this.CodexService.Codex$Sdk$Search$ICodex$SearchAsync(($t = new Codex.Sdk.Search.SearchArguments(), $t.SearchString = searchString, $t));
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    response = $taskResult1;

                                    this.ViewModel.LeftPane = Codex.View.LeftPaneViewModel.FromSearchResponse(searchString, response);
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/MainWindow.xaml"));
            }
        }
    });

    Bridge.define("Codex.View.ProjectGroupResultsViewModel", {
        props: {
            ProjectName: null,
            Items: null
        }
    });

    Bridge.define("Codex.View.Styles", {
        statics: {
            fields: {
                MouseOverBackgroundProperty: null,
                IsMouseOverHeaderProperty: null
            },
            ctors: {
                init: function () {
                    this.MouseOverBackgroundProperty = System.Windows.DependencyProperty.RegisterAttached("MouseOverBackground", System.Windows.Media.Brush, Codex.View.Styles, new System.Windows.PropertyMetadata.$ctor1(System.Windows.Media.Brushes.Transparent));
                    this.IsMouseOverHeaderProperty = System.Windows.DependencyProperty.RegisterAttached("IsMouseOverHeader", System.Boolean, Codex.View.Styles, new System.Windows.PropertyMetadata.$ctor1(Bridge.box(false, System.Boolean, System.Boolean.toString)));
                }
            },
            methods: {
                GetMouseOverBackground: function (obj) {
                    return Bridge.cast(obj.GetValue(Codex.View.Styles.MouseOverBackgroundProperty), System.Windows.Media.Brush);
                },
                SetMouseOverBackground: function (obj, value) {
                    obj.SetValue(Codex.View.Styles.MouseOverBackgroundProperty, value);
                },
                GetIsMouseOverHeader: function (obj) {
                    return System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj.GetValue(Codex.View.Styles.IsMouseOverHeaderProperty)), System.Boolean));
                },
                SetIsMouseOverHeader: function (obj, value) {
                    obj.SetValue(Codex.View.Styles.IsMouseOverHeaderProperty, Bridge.box(value, System.Boolean, System.Boolean.toString));
                },
                Initialize: function () { }
            }
        }
    });

    Bridge.define("Codex.View.Web.Compatibility.Reference", {
        statics: {
            fields: {
                GranularPresentationGenericReference: null,
                JQueryReference: null
            }
        }
    });

    Bridge.define("System.CompatibilityExtensions", {
        statics: {
            methods: {
                ToLowerInvariant: function (value) {
                    return value.toLowerCase();
                }
            }
        }
    });

    Bridge.define("Codex.EntityBase", {
        inherits: [Codex.ISerializableEntity],
        methods: {
            Initialize: function () { },
            OnSerializingCore: function () { },
            OnDeserializedCore: function () { },
            Codex$ISerializableEntity$OnSerializing: function () {
                this.OnSerializingCore();
            },
            Codex$ISerializableEntity$OnDeserialized: function () {
                this.OnDeserializedCore();
            }
        }
    });

    Bridge.define("Codex.IProjectScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IRepoFileScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISourceSearchModelBase", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Defines a classified span of text
     *
     * @abstract
     * @public
     * @class Codex.IClassificationSpan
     * @implements  Codex.ISpan
     */
    Bridge.define("Codex.IClassificationSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ICommitScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    /**
     * Represents a changed file in a commit
     *
     * @abstract
     * @public
     * @class Codex.ICommitChangedFile
     * @implements  Codex.ICommitFileLink
     */
    Bridge.define("Codex.ICommitChangedFile", {
        inherits: [Codex.ICommitFileLink],
        $kind: "interface"
    });

    Bridge.define("Codex.ICommitSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSymbol", {
        inherits: [Codex.ICodeSymbol],
        $kind: "interface"
    });

    Bridge.define("Codex.ILanguageSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ILineSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IProjectSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IPropertySearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * In order to compute a stable integral id for each entity. This type is used to store into a 'follow' index which
     stores entities of this type using the {@link } of the corresponding search entity. Then the
     sequence number assigned by ElasticSearch is used as the shard stable id ({@link })
     for the entity. This approach is used in order to ensure that the stable id appears as an explicit field in the document rather
     which allows configuration of how the field is indexed (not true for sequence number field without code changes to ES).
     *
     * @abstract
     * @public
     * @class Codex.IRegisteredEntity
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.IRegisteredEntity", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IRepositorySearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Defines a stored filter which matches entities in a particular index shard in a stable manner
     *
     * @abstract
     * @public
     * @class Codex.IStoredFilter
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.IStoredFilter", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Documentation for typed parameter
     *
     * @abstract
     * @public
     * @class Codex.ITypedParameterDocumentation
     * @implements  Codex.IParameterDocumentation
     */
    Bridge.define("Codex.ITypedParameterDocumentation", {
        inherits: [Codex.IParameterDocumentation],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.PropertyMapBase", {
        inherits: [System.Collections.Generic.Dictionary$2(System.String,System.String)]
    });

    Bridge.define("Codex.Sdk.Search.BinaryFilter$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexFilter$1(T)],
        fields: {
            Operator: 0,
            Left: null,
            Right: null
        },
        ctors: {
            ctor: function (op, left, right) {
                this.$initialize();
                Codex.Sdk.Search.IndexFilter$1(T).ctor.call(this);
                this.Operator = op;
                this.Left = left;
                this.Right = right;
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.ContextCodexArgumentsBase", {
        inherits: [Codex.Sdk.Search.CodexArgumentsBase],
        fields: {
            /**
             * The id of the repository referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @type string
             */
            ReferencingRepositoryId: null,
            /**
             * The id of the project referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @type string
             */
            ReferencingProjectId: null,
            /**
             * The id of the file referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @type string
             */
            ReferencingFileId: null
        }
    });

    Bridge.define("Codex.Sdk.Search.FullTextIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryResponse$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexQueryResponse],
        props: {
            /**
             * The results of the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse$1
             * @function Result
             * @type T
             */
            Result: Bridge.getDefaultValue(T)
        },
        methods: {
            toString: function () {
                return System.String.format("Result: {0}, {1}", this.Result, Codex.Sdk.Search.IndexQueryResponse.prototype.toString.call(this));
            }
        }
    }; });

    Bridge.definei("Codex.Sdk.Search.IPrefixProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.ITermProperty$1(T)],
        $kind: "interface"
    }; });

    Bridge.define("Codex.Sdk.Search.NormalizedKeywordIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.PrefixFullNameIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.PrefixIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.SortwordIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.SearchType$1", function (TSearchType) { return {
        inherits: [Codex.SearchType],
        fields: {
            CopyToFields: null,
            InheritFields: null
        },
        props: {
            Type: {
                get: function () {
                    return TSearchType;
                }
            }
        },
        ctors: {
            init: function () {
                this.CopyToFields = new (System.Collections.Generic.List$1(System.Object)).ctor();
                this.InheritFields = new (System.Collections.Generic.List$1(System.Object)).ctor();
            },
            ctor: function (name) {
                this.$initialize();
                Codex.SearchType.ctor.call(this);
                this.Name = name;
                this.IndexName = System.CompatibilityExtensions.ToLowerInvariant(this.Name);
            }
        },
        methods: {
            Inherit: function (T, providerField, searchField) {
                return this;
            },
            CopyTo: function (sourceField, targetField) {
                return this;
            },
            Exclude: function (searchField) {
                return this;
            },
            SearchAs: function (T, searchField, behavior) {
                return this;
            }
        }
    }; });

    Bridge.define("Codex.View.BindableValue$1", function (T) { return {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        fields: {
            value: Bridge.getDefaultValue(T)
        },
        props: {
            Value: {
                get: function () {
                    return this.value;
                },
                set: function (value) {
                    this.value = value;
                    this.OnPropertyChanged();
                }
            }
        }
    }; });

    Bridge.define("Codex.View.CategorizedSearchResultsViewModel", {
        inherits: [Codex.View.LeftPaneContent],
        props: {
            Categories: null
        },
        ctors: {
            ctor: function (searchString, response) {
                this.$initialize();
                this.Categories = function (_o1) {
                        _o1.add(new Codex.View.CategoryGroupSearchResultsViewModel(searchString, response));
                        return _o1;
                    }(new (System.Collections.Generic.List$1(Codex.View.CategoryGroupSearchResultsViewModel)).ctor());
            }
        }
    });

    Bridge.define("Codex.View.FileResultsViewModel", {
        inherits: [Codex.View.ProjectItemResultViewModel],
        props: {
            Path: null,
            Items: null
        }
    });

    Bridge.define("Codex.View.LeftPaneViewModel", {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        statics: {
            fields: {
                Initial: null
            },
            ctors: {
                init: function () {
                    var $t;
                    this.Initial = ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = "Enter a search string. Start with ` for full text search results only.", $t);
                }
            },
            methods: {
                FromSearchResponse: function (searchString, response) {
                    var $t, $t1;
                    if (response.Error != null) {
                        return ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = response.Error, $t);
                    } else if ((($t = response.Result) != null ? $t.Hits : null) == null || response.Result.Hits.Count === 0) {
                        return ($t1 = new Codex.View.LeftPaneViewModel(), $t1.SearchInfo = System.String.format("No results found.", null), $t1);
                    }

                    var result = response.Result;
                    var isDefinitionsResult = result.Hits.getItem(0).Codex$Sdk$Search$ISearchResult$Definition != null;
                    return ($t1 = new Codex.View.LeftPaneViewModel(), $t1.Content = isDefinitionsResult ? Bridge.cast(new Codex.View.ProjectResultsViewModel.$ctor1(searchString, response), Codex.View.LeftPaneContent) : new Codex.View.CategorizedSearchResultsViewModel(searchString, response), $t1.SearchInfo = isDefinitionsResult ? (System.Int64(result.Hits.Count).lt(result.Total) ? System.String.format("Displaying top {0} results out of {1}:", Bridge.box(result.Hits.Count, System.Int32), result.Total) : System.String.format("{0} results found:", Bridge.box(result.Hits.Count, System.Int32))) : "", $t1);
                }
            }
        },
        props: {
            SearchInfoVisibility: {
                get: function () {
                    return !System.String.isNullOrEmpty(this.SearchInfo) ? System.Windows.Visibility.Visible : System.Windows.Visibility.Collapsed;
                }
            },
            SearchInfo: null,
            ContentVisibility: {
                get: function () {
                    return this.Content != null ? System.Windows.Visibility.Visible : System.Windows.Visibility.Collapsed;
                }
            },
            Content: null
        }
    });

    Bridge.define("Codex.View.ProjectResultsViewModel", {
        inherits: [Codex.View.LeftPaneContent],
        props: {
            ProjectGroups: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (searchString, response) {
                this.$initialize();
                this.ProjectGroups = System.Linq.Enumerable.from(response.Result.Hits).select($asm.$.Codex.View.ProjectResultsViewModel.f1).groupBy($asm.$.Codex.View.ProjectResultsViewModel.f2).select($asm.$.Codex.View.ProjectResultsViewModel.f4).toList(Codex.View.ProjectGroupResultsViewModel);
            }
        }
    });

    Bridge.ns("Codex.View.ProjectResultsViewModel", $asm.$);

    Bridge.apply($asm.$.Codex.View.ProjectResultsViewModel, {
        f1: function (sr) {
            return sr.Codex$Sdk$Search$ISearchResult$Definition;
        },
        f2: function (sr) {
            return sr.Codex$ICodeSymbol$ProjectId;
        },
        f3: function (symbol) {
            return new Codex.View.SymbolResultViewModel(symbol);
        },
        f4: function (projectGroup) {
            var $t;
            return ($t = new Codex.View.ProjectGroupResultsViewModel(), $t.ProjectName = projectGroup.key(), $t.Items = projectGroup.select($asm.$.Codex.View.ProjectResultsViewModel.f3).toList(Codex.View.SymbolResultViewModel), $t);
        }
    });

    Bridge.define("Codex.View.SymbolResultViewModel", {
        inherits: [Codex.View.ProjectItemResultViewModel],
        props: {
            ShortName: null,
            DisplayName: null,
            SymbolKind: null,
            ProjectId: null,
            ImageMoniker: null,
            SortOrder: 0,
            IdentifierLength: {
                get: function () {
                    return this.ShortName.length;
                }
            }
        },
        ctors: {
            ctor: function (entry) {
                var $t;
                this.$initialize();
                Codex.View.ProjectItemResultViewModel.ctor.call(this);
                this.ShortName = entry.Codex$IDefinitionSymbol$ShortName;
                this.DisplayName = entry.Codex$IDefinitionSymbol$DisplayName;
                this.ProjectId = entry.Codex$ICodeSymbol$ProjectId;
                this.SymbolKind = ($t = entry.Codex$ICodeSymbol$Kind) != null ? System.CompatibilityExtensions.ToLowerInvariant($t) : null;
            }
        }
    });

    Bridge.define("Codex.View.TextSpanSearchResultViewModel", {
        inherits: [Codex.View.FileItemResultViewModel],
        props: {
            SearchResult: null,
            LineNumber: 0,
            PrefixText: null,
            ContentText: null,
            SuffixText: null
        },
        ctors: {
            ctor: function (result) {
                this.$initialize();
                Codex.View.FileItemResultViewModel.ctor.call(this);
                this.SearchResult = result;
                var referringSpan = result.Codex$Sdk$Search$ITextLineSpanResult$TextSpan;
                this.LineNumber = referringSpan.Codex$ILineSpan$LineNumber;
                var lineSpanText = referringSpan.Codex$ITextLineSpan$LineSpanText;
                if (lineSpanText != null) {
                    this.PrefixText = lineSpanText.substr(0, referringSpan.Codex$ILineSpan$LineSpanStart);
                    this.ContentText = lineSpanText.substr(referringSpan.Codex$ILineSpan$LineSpanStart, referringSpan.Codex$ISpan$Length);
                    this.SuffixText = lineSpanText.substr(((referringSpan.Codex$ILineSpan$LineSpanStart + referringSpan.Codex$ISpan$Length) | 0));
                }
            }
        }
    });

    Bridge.define("Codex.View.ViewModelDataContext", {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        fields: {
            leftPane: null
        },
        props: {
            LeftPane: {
                get: function () {
                    return this.leftPane;
                },
                set: function (value) {
                    // HACK to force full refresh of left pane
                    //if (value != null)
                    //{
                    //    leftPane = null;
                    //    OnPropertyChanged();
                    //}

                    this.leftPane = value;
                    this.OnPropertyChanged();
                }
            }
        },
        methods: {
            Initialize: function () {
                this.LeftPane = Codex.View.LeftPaneViewModel.Initial;
            }
        }
    });

    Bridge.define("Codex.View.Web.WebApiCodex", {
        inherits: [Codex.Sdk.Search.ICodex],
        fields: {
            baseUrl: null
        },
        alias: [
            "FindAllReferencesAsync", "Codex$Sdk$Search$ICodex$FindAllReferencesAsync",
            "FindDefinitionAsync", "Codex$Sdk$Search$ICodex$FindDefinitionAsync",
            "FindDefinitionLocationAsync", "Codex$Sdk$Search$ICodex$FindDefinitionLocationAsync",
            "GetSourceAsync", "Codex$Sdk$Search$ICodex$GetSourceAsync",
            "SearchAsync", "Codex$Sdk$Search$ICodex$SearchAsync"
        ],
        ctors: {
            ctor: function (baseUrl) {
                this.$initialize();
                this.baseUrl = System.String.endsWith(baseUrl, "/") ? baseUrl : (baseUrl || "") + String.fromCharCode(47);
            }
        },
        methods: {
            FindAllReferencesAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.ReferenceSearchModel), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.IReferenceSearchModel), Codex.Sdk.Search.CodexServiceMethod.FindAllRefs, $arguments);
            },
            FindDefinitionAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.DefinitionSearchModel), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.IDefinitionSearchModel), Codex.Sdk.Search.CodexServiceMethod.FindDef, $arguments);
            },
            FindDefinitionLocationAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.ReferenceSearchModel), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.IReferenceSearchModel), Codex.Sdk.Search.CodexServiceMethod.FindDefLocation, $arguments);
            },
            GetSourceAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryResponse$1(Codex.ObjectModel.BoundSourceSearchModel), Codex.Sdk.Search.IndexQueryResponse$1(Codex.IBoundSourceSearchModel), Codex.Sdk.Search.CodexServiceMethod.GetSource, $arguments);
            },
            SearchAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.SearchResult), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.Sdk.Search.ISearchResult), Codex.Sdk.Search.CodexServiceMethod.Search, $arguments);
            },
            PostAsync: function (TSerializedResult, TResult, searchMethod, $arguments) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();

                var url = (this.baseUrl || "") + (System.Enum.toString(Codex.Sdk.Search.CodexServiceMethod, searchMethod) || "");
                System.Console.WriteLine(url);

                var argumentsData = Newtonsoft.Json.JsonConvert.SerializeObject($arguments);

                var config = { url: url, type: "POST", data: argumentsData, contentType: "application/json; charset=utf-8", success: function (data, textStatus, successRequest) {
                    tcs.setResult(Newtonsoft.Json.JsonConvert.DeserializeObject(successRequest.responseText, TSerializedResult));
                    return null;
                }, error: function (errorRequest, textStatus, errorThrown) {
                    var $t;
                    tcs.setResult(($t = new TResult(), $t.Error = System.String.format("Error: {0}", errorThrown), $t));

                    return null;
                } };

                jQuery.ajax(config);

                return tcs.task;
            }
        }
    });

    Bridge.define("Codex.IProjectFileScopeEntity", {
        inherits: [Codex.IRepoFileScopeEntity,Codex.IProjectScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IBoundSourceSearchModel", {
        inherits: [Codex.ISourceSearchModelBase],
        $kind: "interface"
    });

    /**
     * Describes a commit in version control
     *
     * @abstract
     * @public
     * @class Codex.ICommit
     * @implements  Codex.ICommitScopeEntity
     */
    Bridge.define("Codex.ICommit", {
        inherits: [Codex.ICommitScopeEntity],
        $kind: "interface"
    });

    /**
     * Represents a directory in source control
     *
     * @abstract
     * @public
     * @class Codex.ICommitFilesDirectory
     * @implements  Codex.IRepoFileScopeEntity
     */
    Bridge.define("Codex.ICommitFilesDirectory", {
        inherits: [Codex.IRepoFileScopeEntity],
        $kind: "interface"
    });

    /**
     * The set of files present in the repository at a given commit.
     *
     * @abstract
     * @public
     * @class Codex.ICommitFilesSearchModel
     * @implements  Codex.ICommitScopeEntity
     * @implements  Codex.IRepoScopeEntity
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.ICommitFilesSearchModel", {
        inherits: [Codex.ICommitScopeEntity,Codex.IRepoScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSymbol", {
        inherits: [Codex.IReferenceSymbol],
        $kind: "interface"
    });

    /**
     * Decribes a symbol related to a given documented symbol
     *
     * @abstract
     * @public
     * @class Codex.IDocumentationReferenceSymbol
     * @implements  Codex.IReferenceSymbol
     */
    Bridge.define("Codex.IDocumentationReferenceSymbol", {
        inherits: [Codex.IReferenceSymbol],
        $kind: "interface"
    });

    /**
     * A specialized definition span referring to a parameter of a method/property
     *
     * @abstract
     * @public
     * @class Codex.IParameterDefinitionSpan
     * @implements  Codex.ILineSpan
     */
    Bridge.define("Codex.IParameterDefinitionSpan", {
        inherits: [Codex.ILineSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ITextLineSpan", {
        inherits: [Codex.ILineSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IProject", {
        inherits: [Codex.IProjectScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IProjectReferenceSearchModel", {
        inherits: [Codex.IProjectScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ITextSourceSearchModel", {
        inherits: [Codex.ISourceSearchModelBase],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.RepoScopeEntity", {
        inherits: [Codex.EntityBase,Codex.IRepoScopeEntity],
        fields: {
            m_RepositoryName: null
        },
        props: {
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepoScopeEntity
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: ["RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepoScopeEntity, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Marker interface for searchable entities
     TODO: Consider moving {@link } out if its not needed by all searchable entities
     *
     * @public
     * @class Codex.ObjectModel.SearchEntity
     * @augments Codex.EntityBase
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.ObjectModel.SearchEntity", {
        inherits: [Codex.EntityBase,Codex.ISearchEntity],
        fields: {
            m_Uid: null,
            m_EntityContentId: null,
            m_EntityContentSize: 0,
            m_EntityVersion: null,
            m_ShardStableId: System.Int64(0)
        },
        props: {
            Uid: {
                get: function () {
                    return this.m_Uid;
                },
                set: function (value) {
                    this.m_Uid = value;
                }
            },
            /**
             * Defines the content addressable identifier for the entity. This is used
             to determine if an entity with the same {@link } should be updated
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityContentId
             * @type string
             */
            EntityContentId: {
                get: function () {
                    return this.m_EntityContentId;
                },
                set: function (value) {
                    this.m_EntityContentId = value;
                }
            },
            /**
             * Defines the size of the raw serialized entity.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityContentSize
             * @type number
             */
            EntityContentSize: {
                get: function () {
                    return this.m_EntityContentSize;
                },
                set: function (value) {
                    this.m_EntityContentSize = value;
                }
            },
            /**
             * The version number used when storing the entity (for use by ElasticSearch concurrency control
             to prevent races when storing values)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityVersion
             * @type ?number
             */
            EntityVersion: {
                get: function () {
                    return this.m_EntityVersion;
                },
                set: function (value) {
                    this.m_EntityVersion = value;
                }
            },
            /**
             * The per-shard stable identity (derived from ElasticSearch sequence number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function ShardStableId
             * @type number
             */
            ShardStableId: {
                get: function () {
                    return this.m_ShardStableId;
                },
                set: function (value) {
                    this.m_ShardStableId = value;
                }
            }
        },
        alias: [
            "Uid", "Codex$ISearchEntity$Uid",
            "EntityContentId", "Codex$ISearchEntity$EntityContentId",
            "EntityContentSize", "Codex$ISearchEntity$EntityContentSize",
            "EntityVersion", "Codex$ISearchEntity$EntityVersion",
            "ShardStableId", "Codex$ISearchEntity$ShardStableId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SearchEntity, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Uid = value.Codex$ISearchEntity$Uid;
                this.m_EntityContentId = value.Codex$ISearchEntity$EntityContentId;
                this.m_EntityContentSize = value.Codex$ISearchEntity$EntityContentSize;
                this.m_EntityVersion = value.Codex$ISearchEntity$EntityVersion;
                this.m_ShardStableId = value.Codex$ISearchEntity$ShardStableId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Describes a branch in a repository
     *
     * @public
     * @class Codex.ObjectModel.Branch
     * @augments Codex.EntityBase
     * @implements  Codex.IBranch
     */
    Bridge.define("Codex.ObjectModel.Branch", {
        inherits: [Codex.EntityBase,Codex.IBranch],
        fields: {
            m_Name: null,
            m_Description: null,
            m_HeadCommitId: null
        },
        props: {
            /**
             * The name of the branch
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The branch description
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * The head commit of the branch
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function HeadCommitId
             * @type string
             */
            HeadCommitId: {
                get: function () {
                    return this.m_HeadCommitId;
                },
                set: function (value) {
                    this.m_HeadCommitId = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IBranch$Name",
            "Description", "Codex$IBranch$Description",
            "HeadCommitId", "Codex$IBranch$HeadCommitId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Branch, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IBranch$Name;
                this.m_Description = value.Codex$IBranch$Description;
                this.m_HeadCommitId = value.Codex$IBranch$HeadCommitId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Span", {
        inherits: [Codex.EntityBase,Codex.ISpan],
        fields: {
            m_Start: 0,
            m_Length: 0
        },
        props: {
            /**
             * The absolute character offset of the span within the document
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Span
             * @function Start
             * @type number
             */
            Start: {
                get: function () {
                    return this.m_Start;
                },
                set: function (value) {
                    this.m_Start = value;
                }
            },
            /**
             * The length of the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Span
             * @function Length
             * @type number
             */
            Length: {
                get: function () {
                    return this.m_Length;
                },
                set: function (value) {
                    this.m_Length = value;
                }
            },
            /**
             * The absolute character offset of the end (exclusive) of the span within the document
             *
             * @instance
             * @public
             * @readonly
             * @memberof Codex.ObjectModel.Span
             * @function End
             * @type number
             */
            End: {
                get: function () {
                    return ((this.Start + this.Length) | 0);
                }
            }
        },
        alias: [
            "Start", "Codex$ISpan$Start",
            "Length", "Codex$ISpan$Length"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Span, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Start = value.Codex$ISpan$Start;
                this.m_Length = value.Codex$ISpan$Length;
                return Bridge.cast((this), TTarget);
            },
            Contains: function (span) {
                if (span == null) {
                    return false;
                }

                return span.Start >= this.Start && span.End <= this.End;
            },
            SpanEquals: function (span) {
                if (span == null) {
                    return false;
                }

                return span.Start === this.Start && span.End === this.End;
            }
        }
    });

    /**
     * Describes styling for a given classification
     *
     * @public
     * @class Codex.ObjectModel.ClassificationStyle
     * @augments Codex.EntityBase
     * @implements  Codex.IClassificationStyle
     */
    Bridge.define("Codex.ObjectModel.ClassificationStyle", {
        inherits: [Codex.EntityBase,Codex.IClassificationStyle],
        fields: {
            m_Color: 0,
            m_Italic: false,
            m_Name: null
        },
        props: {
            /**
             * The default classification color for the classification. This is used for
             contexts where a mapping from classification id to color is not
             available.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Color
             * @type number
             */
            Color: {
                get: function () {
                    return this.m_Color;
                },
                set: function (value) {
                    this.m_Color = value;
                }
            },
            /**
             * Indicates whether the spans classified with this classification should have italic font by default
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Italic
             * @type boolean
             */
            Italic: {
                get: function () {
                    return this.m_Italic;
                },
                set: function (value) {
                    this.m_Italic = value;
                }
            },
            /**
             * The name of the classification
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: [
            "Color", "Codex$IClassificationStyle$Color",
            "Italic", "Codex$IClassificationStyle$Italic",
            "Name", "Codex$IClassificationStyle$Name"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ClassificationStyle, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Color = value.Codex$IClassificationStyle$Color;
                this.m_Italic = value.Codex$IClassificationStyle$Italic;
                this.m_Name = value.Codex$IClassificationStyle$Name;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReview", {
        inherits: [Codex.EntityBase,Codex.ICodeReview],
        fields: {
            m_Id: null,
            m_Description: null,
            m_Url: null,
            m_Status: 0
        },
        props: {
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * Url for accessing code review in source control management (i.e. GitHub or VSO)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReview
             * @function Url
             * @type string
             */
            Url: {
                get: function () {
                    return this.m_Url;
                },
                set: function (value) {
                    this.m_Url = value;
                }
            },
            Status: {
                get: function () {
                    return this.m_Status;
                },
                set: function (value) {
                    this.m_Status = value;
                }
            }
        },
        alias: [
            "Id", "Codex$ICodeReview$Id",
            "Description", "Codex$ICodeReview$Description",
            "Url", "Codex$ICodeReview$Url",
            "Status", "Codex$ICodeReview$Status"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReview, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Id = value.Codex$ICodeReview$Id;
                this.m_Description = value.Codex$ICodeReview$Description;
                this.m_Url = value.Codex$ICodeReview$Url;
                this.m_Status = value.Codex$ICodeReview$Status;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewComment", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewComment],
        fields: {
            m_Text: null,
            m_Reviewer: null,
            m_Importance: 0,
            m_CommentTime: null
        },
        props: {
            Text: {
                get: function () {
                    return this.m_Text;
                },
                set: function (value) {
                    this.m_Text = value;
                }
            },
            /**
             * The name of the reviewer which made the comment
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function Reviewer
             * @type string
             */
            Reviewer: {
                get: function () {
                    return this.m_Reviewer;
                },
                set: function (value) {
                    this.m_Reviewer = value;
                }
            },
            /**
             * The importance of the comment
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function Importance
             * @type Codex.CommentImportance
             */
            Importance: {
                get: function () {
                    return this.m_Importance;
                },
                set: function (value) {
                    this.m_Importance = value;
                }
            },
            /**
             * The time when the comment was submitted
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function CommentTime
             * @type System.DateTime
             */
            CommentTime: {
                get: function () {
                    return this.m_CommentTime;
                },
                set: function (value) {
                    this.m_CommentTime = value;
                }
            }
        },
        alias: [
            "Text", "Codex$ICodeReviewComment$Text",
            "Reviewer", "Codex$ICodeReviewComment$Reviewer",
            "Importance", "Codex$ICodeReviewComment$Importance",
            "CommentTime", "Codex$ICodeReviewComment$CommentTime"
        ],
        ctors: {
            init: function () {
                this.m_CommentTime = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewComment, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Text = value.Codex$ICodeReviewComment$Text;
                this.m_Reviewer = value.Codex$ICodeReviewComment$Reviewer;
                this.m_Importance = value.Codex$ICodeReviewComment$Importance;
                this.m_CommentTime = value.Codex$ICodeReviewComment$CommentTime;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewCommentThread", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewCommentThread],
        fields: {
            m_OriginalSpan: null,
            m_StartIteration: 0,
            m_LastUpdated: null,
            m_FileRepoRelativePath: null,
            m_Comments: null
        },
        props: {
            /**
             * The original location for the comment in the originating iteration
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function Codex$ICodeReviewCommentThread$OriginalSpan
             * @type Codex.ILineSpan
             */
            Codex$ICodeReviewCommentThread$OriginalSpan: {
                get: function () {
                    return this.OriginalSpan;
                }
            },
            /**
             * The original location for the comment in the originating iteration
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function OriginalSpan
             * @type Codex.ObjectModel.LineSpan
             */
            OriginalSpan: {
                get: function () {
                    return this.m_OriginalSpan;
                },
                set: function (value) {
                    this.m_OriginalSpan = value;
                }
            },
            /**
             * The iteration where the comment originated
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function StartIteration
             * @type number
             */
            StartIteration: {
                get: function () {
                    return this.m_StartIteration;
                },
                set: function (value) {
                    this.m_StartIteration = value;
                }
            },
            /**
             * The last tie
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function LastUpdated
             * @type System.DateTime
             */
            LastUpdated: {
                get: function () {
                    return this.m_LastUpdated;
                },
                set: function (value) {
                    this.m_LastUpdated = value;
                }
            },
            FileRepoRelativePath: {
                get: function () {
                    return this.m_FileRepoRelativePath;
                },
                set: function (value) {
                    this.m_FileRepoRelativePath = value;
                }
            },
            Codex$ICodeReviewCommentThread$Comments: {
                get: function () {
                    return this.Comments;
                }
            },
            Comments: {
                get: function () {
                    return this.m_Comments;
                },
                set: function (value) {
                    this.m_Comments = value;
                }
            }
        },
        alias: [
            "StartIteration", "Codex$ICodeReviewCommentThread$StartIteration",
            "LastUpdated", "Codex$ICodeReviewCommentThread$LastUpdated",
            "FileRepoRelativePath", "Codex$ICodeReviewCommentThread$FileRepoRelativePath"
        ],
        ctors: {
            init: function () {
                this.m_LastUpdated = System.DateTime.getDefaultValue();
                this.m_Comments = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewComment)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewCommentThread, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_OriginalSpan = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LineSpan, Bridge.global.Codex.ObjectModel.LineSpan, this.OriginalSpan, $asm.$.Codex.ObjectModel.CodeReviewCommentThread.f1);
                ;
                this.m_StartIteration = value.Codex$ICodeReviewCommentThread$StartIteration;
                this.m_LastUpdated = value.Codex$ICodeReviewCommentThread$LastUpdated;
                this.m_FileRepoRelativePath = value.Codex$ICodeReviewCommentThread$FileRepoRelativePath;
                this.m_Comments = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewComment)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICodeReviewCommentThread$Comments).select($asm.$.Codex.ObjectModel.CodeReviewCommentThread.f3));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CodeReviewCommentThread", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CodeReviewCommentThread, {
        f1: function (v) {
            return new Codex.ObjectModel.LineSpan.ctor().CopyFrom$1(Codex.ObjectModel.LineSpan, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.CodeReviewComment.ctor().CopyFrom(Codex.ObjectModel.CodeReviewComment, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICodeReviewComment, Bridge.global.Codex.ObjectModel.CodeReviewComment, v, $asm.$.Codex.ObjectModel.CodeReviewCommentThread.f2);
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewerInfo", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewerInfo],
        fields: {
            m_Name: null
        },
        props: {
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: ["Name", "Codex$ICodeReviewerInfo$Name"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewerInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$ICodeReviewerInfo$Name;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewFile", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewFile],
        fields: {
            m_StartIteration: 0,
            m_RepoRelativePath: null,
            m_FileId: null,
            m_BaselineFileId: null,
            m_ChangeKind: 0
        },
        props: {
            /**
             * The first iteration in which this file appears
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function StartIteration
             * @type number
             */
            StartIteration: {
                get: function () {
                    return this.m_StartIteration;
                },
                set: function (value) {
                    this.m_StartIteration = value;
                }
            },
            /**
             * The relative path in the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The file id of the new version of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            },
            /**
             * The file id of the baseline version of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function BaselineFileId
             * @type string
             */
            BaselineFileId: {
                get: function () {
                    return this.m_BaselineFileId;
                },
                set: function (value) {
                    this.m_BaselineFileId = value;
                }
            },
            /**
             * The type of change applied to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function ChangeKind
             * @type Codex.FileChangeKind
             */
            ChangeKind: {
                get: function () {
                    return this.m_ChangeKind;
                },
                set: function (value) {
                    this.m_ChangeKind = value;
                }
            }
        },
        alias: [
            "StartIteration", "Codex$ICodeReviewFile$StartIteration",
            "RepoRelativePath", "Codex$ICodeReviewFile$RepoRelativePath",
            "FileId", "Codex$ICodeReviewFile$FileId",
            "BaselineFileId", "Codex$ICodeReviewFile$BaselineFileId",
            "ChangeKind", "Codex$ICodeReviewFile$ChangeKind"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_StartIteration = value.Codex$ICodeReviewFile$StartIteration;
                this.m_RepoRelativePath = value.Codex$ICodeReviewFile$RepoRelativePath;
                this.m_FileId = value.Codex$ICodeReviewFile$FileId;
                this.m_BaselineFileId = value.Codex$ICodeReviewFile$BaselineFileId;
                this.m_ChangeKind = value.Codex$ICodeReviewFile$ChangeKind;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewIteration", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewIteration],
        fields: {
            m_IterationNumber: 0,
            m_ReviewId: null,
            m_Description: null,
            m_Files: null
        },
        props: {
            IterationNumber: {
                get: function () {
                    return this.m_IterationNumber;
                },
                set: function (value) {
                    this.m_IterationNumber = value;
                }
            },
            ReviewId: {
                get: function () {
                    return this.m_ReviewId;
                },
                set: function (value) {
                    this.m_ReviewId = value;
                }
            },
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            Codex$ICodeReviewIteration$Files: {
                get: function () {
                    return this.Files;
                }
            },
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            }
        },
        alias: [
            "IterationNumber", "Codex$ICodeReviewIteration$IterationNumber",
            "ReviewId", "Codex$ICodeReviewIteration$ReviewId",
            "Description", "Codex$ICodeReviewIteration$Description"
        ],
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewFile)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewIteration, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_IterationNumber = value.Codex$ICodeReviewIteration$IterationNumber;
                this.m_ReviewId = value.Codex$ICodeReviewIteration$ReviewId;
                this.m_Description = value.Codex$ICodeReviewIteration$Description;
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewFile)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICodeReviewIteration$Files).select($asm.$.Codex.ObjectModel.CodeReviewIteration.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CodeReviewIteration", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CodeReviewIteration, {
        f1: function (_v) {
            return new Codex.ObjectModel.CodeReviewFile.ctor().CopyFrom(Codex.ObjectModel.CodeReviewFile, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICodeReviewFile, Bridge.global.Codex.ObjectModel.CodeReviewFile, v, $asm.$.Codex.ObjectModel.CodeReviewIteration.f1);
        }
    });

    /**
     * Represents a version of a repository file for a commit
     *
     * @public
     * @class Codex.ObjectModel.CommitFileLink
     * @augments Codex.EntityBase
     * @implements  Codex.ICommitFileLink
     */
    Bridge.define("Codex.ObjectModel.CommitFileLink", {
        inherits: [Codex.EntityBase,Codex.ICommitFileLink],
        fields: {
            m_RepoRelativePath: null,
            m_FileId: null,
            m_VersionControlFileId: null
        },
        props: {
            /**
             * The relative path in the repository to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * Unique identifer for file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            },
            /**
             * Unique identifer for file content as determined by version control
             (i.e. the blob hash)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function VersionControlFileId
             * @type string
             */
            VersionControlFileId: {
                get: function () {
                    return this.m_VersionControlFileId;
                },
                set: function (value) {
                    this.m_VersionControlFileId = value;
                }
            }
        },
        alias: [
            "RepoRelativePath", "Codex$ICommitFileLink$RepoRelativePath",
            "FileId", "Codex$ICommitFileLink$FileId",
            "VersionControlFileId", "Codex$ICommitFileLink$VersionControlFileId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CommitFileLink, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$ICommitFileLink$RepoRelativePath;
                this.m_FileId = value.Codex$ICommitFileLink$FileId;
                this.m_VersionControlFileId = value.Codex$ICommitFileLink$VersionControlFileId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Symbol", {
        inherits: [Codex.EntityBase,Codex.ICodeSymbol],
        fields: {
            m_ProjectId: null,
            m_Id: null,
            m_Kind: null
        },
        props: {
            /**
             * The identifier of the project in which the symbol appears
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * The identifier for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function Id
             * @type Codex.ObjectModel.SymbolId
             */
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            /**
             * The symbol kind. (i.e. interface, method, field)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function Kind
             * @type string
             */
            Kind: {
                get: function () {
                    return this.m_Kind;
                },
                set: function (value) {
                    this.m_Kind = value;
                }
            },
            /**
             * Extension data used during analysis/search
             TODO: Why is this needed?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function ExtData
             * @type Codex.ObjectModel.ExtensionData
             */
            ExtData: null
        },
        alias: [
            "ProjectId", "Codex$ICodeSymbol$ProjectId",
            "Id", "Codex$ICodeSymbol$Id",
            "Kind", "Codex$ICodeSymbol$Kind"
        ],
        ctors: {
            init: function () {
                this.m_Id = new Codex.ObjectModel.SymbolId();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Symbol, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_ProjectId = value.Codex$ICodeSymbol$ProjectId;
                this.m_Id = value.Codex$ICodeSymbol$Id;
                this.m_Kind = value.Codex$ICodeSymbol$Kind;
                return Bridge.cast((this), TTarget);
            },
            Equals: function (other) {
                return System.String.equals(this.ProjectId, other.ProjectId, 4) && System.String.equals(this.Id.Value, other.Id.Value, 4);
            },
            equals: function (obj) {
                if (Bridge.referenceEquals(null, obj)) {
                    return false;
                }
                if (Bridge.referenceEquals(this, obj)) {
                    return true;
                }
                if (!Bridge.referenceEquals(Bridge.getType(obj), Bridge.getType(this))) {
                    return false;
                }
                return this.Equals(Bridge.cast(obj, Codex.ObjectModel.Symbol));
            },
            getHashCode: function () {
                var $t, $t1, $t2, $t3;
                return (Bridge.Int.mul((($t = (($t1 = this.ProjectId) != null ? Bridge.getHashCode($t1) : null), $t != null ? $t : 0)), 397)) ^ (($t2 = (($t3 = this.Id.Value) != null ? Bridge.getHashCode($t3) : null), $t2 != null ? $t2 : 0));
            },
            toString: function () {
                return this.Id.Value;
            }
        }
    });

    /**
     * Defines documentation about a symbol
     *
     * @public
     * @class Codex.ObjectModel.DocumentationInfo
     * @augments Codex.EntityBase
     * @implements  Codex.IDocumentationInfo
     */
    Bridge.define("Codex.ObjectModel.DocumentationInfo", {
        inherits: [Codex.EntityBase,Codex.IDocumentationInfo],
        fields: {
            m_DeclarationName: null,
            m_Comment: null,
            m_AssociatedSymbol: null,
            m_References: null,
            m_Summary: null,
            m_Remarks: null,
            m_Arguments: null,
            m_TypeParameters: null,
            m_Exceptions: null
        },
        props: {
            /**
             * The declaration name for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function DeclarationName
             * @type string
             */
            DeclarationName: {
                get: function () {
                    return this.m_DeclarationName;
                },
                set: function (value) {
                    this.m_DeclarationName = value;
                }
            },
            /**
             * The comment applied to the definition (this is the raw doc comment text)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            },
            /**
             * Identity of symbol which generated this documentation
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$AssociatedSymbol
             * @type Codex.ICodeSymbol
             */
            Codex$IDocumentationInfo$AssociatedSymbol: {
                get: function () {
                    return this.AssociatedSymbol;
                }
            },
            /**
             * Identity of symbol which generated this documentation
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function AssociatedSymbol
             * @type Codex.ObjectModel.Symbol
             */
            AssociatedSymbol: {
                get: function () {
                    return this.m_AssociatedSymbol;
                },
                set: function (value) {
                    this.m_AssociatedSymbol = value;
                }
            },
            /**
             * The other symbols referenced by this symbol (i.e. base type, implemented interface
             or interface members, overridden members, return type of method or property type)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$References: {
                get: function () {
                    return this.References;
                }
            },
            /**
             * The other symbols referenced by this symbol (i.e. base type, implemented interface
             or interface members, overridden members, return type of method or property type)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function References
             * @type System.Collections.Generic.List$1
             */
            References: {
                get: function () {
                    return this.m_References;
                },
                set: function (value) {
                    this.m_References = value;
                }
            },
            /**
             * Describes the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Summary
             * @type string
             */
            Summary: {
                get: function () {
                    return this.m_Summary;
                },
                set: function (value) {
                    this.m_Summary = value;
                }
            },
            /**
             * Supplementation information about the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Remarks
             * @type string
             */
            Remarks: {
                get: function () {
                    return this.m_Remarks;
                },
                set: function (value) {
                    this.m_Remarks = value;
                }
            },
            /**
             * Comments on arguments
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$Arguments
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$Arguments: {
                get: function () {
                    return this.Arguments;
                }
            },
            /**
             * Comments on arguments
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Arguments
             * @type System.Collections.Generic.List$1
             */
            Arguments: {
                get: function () {
                    return this.m_Arguments;
                },
                set: function (value) {
                    this.m_Arguments = value;
                }
            },
            /**
             * Comments on type parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$TypeParameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$TypeParameters: {
                get: function () {
                    return this.TypeParameters;
                }
            },
            /**
             * Comments on type parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function TypeParameters
             * @type System.Collections.Generic.List$1
             */
            TypeParameters: {
                get: function () {
                    return this.m_TypeParameters;
                },
                set: function (value) {
                    this.m_TypeParameters = value;
                }
            },
            /**
             * Information about exceptions which can be thrown
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$Exceptions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$Exceptions: {
                get: function () {
                    return this.Exceptions;
                }
            },
            /**
             * Information about exceptions which can be thrown
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Exceptions
             * @type System.Collections.Generic.List$1
             */
            Exceptions: {
                get: function () {
                    return this.m_Exceptions;
                },
                set: function (value) {
                    this.m_Exceptions = value;
                }
            }
        },
        alias: [
            "DeclarationName", "Codex$IDocumentationInfo$DeclarationName",
            "Comment", "Codex$IDocumentationInfo$Comment",
            "Summary", "Codex$IDocumentationInfo$Summary",
            "Remarks", "Codex$IDocumentationInfo$Remarks"
        ],
        ctors: {
            init: function () {
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.DocumentationReferenceSymbol)).ctor();
                this.m_Arguments = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).ctor();
                this.m_TypeParameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDocumentation)).ctor();
                this.m_Exceptions = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.DocumentationInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_DeclarationName = value.Codex$IDocumentationInfo$DeclarationName;
                this.m_Comment = value.Codex$IDocumentationInfo$Comment;
                this.m_AssociatedSymbol = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Symbol, Bridge.global.Codex.ObjectModel.Symbol, this.AssociatedSymbol, $asm.$.Codex.ObjectModel.DocumentationInfo.f1);
                ;
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.DocumentationReferenceSymbol)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$References).select($asm.$.Codex.ObjectModel.DocumentationInfo.f3));
                this.m_Summary = value.Codex$IDocumentationInfo$Summary;
                this.m_Remarks = value.Codex$IDocumentationInfo$Remarks;
                this.m_Arguments = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$Arguments).select($asm.$.Codex.ObjectModel.DocumentationInfo.f5));
                this.m_TypeParameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$TypeParameters).select($asm.$.Codex.ObjectModel.DocumentationInfo.f7));
                this.m_Exceptions = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$Exceptions).select($asm.$.Codex.ObjectModel.DocumentationInfo.f5));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DocumentationInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DocumentationInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.Symbol.ctor().CopyFrom(Codex.ObjectModel.Symbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.DocumentationReferenceSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IDocumentationReferenceSymbol, Bridge.global.Codex.ObjectModel.DocumentationReferenceSymbol, v, $asm.$.Codex.ObjectModel.DocumentationInfo.f2);
        },
        f4: function (_v) {
            return new Codex.ObjectModel.TypedParameterDocumentation.ctor().CopyFrom$1(Codex.ObjectModel.TypedParameterDocumentation, _v);
        },
        f5: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ITypedParameterDocumentation, Bridge.global.Codex.ObjectModel.TypedParameterDocumentation, v, $asm.$.Codex.ObjectModel.DocumentationInfo.f4);
        },
        f6: function (_v) {
            return new Codex.ObjectModel.ParameterDocumentation.ctor().CopyFrom(Codex.ObjectModel.ParameterDocumentation, _v);
        },
        f7: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IParameterDocumentation, Bridge.global.Codex.ObjectModel.ParameterDocumentation, v, $asm.$.Codex.ObjectModel.DocumentationInfo.f6);
        }
    });

    /**
     * Describes encoding so that file may be reconstituted in a byte-identical form
     *
     * @public
     * @class Codex.ObjectModel.EncodingDescription
     * @augments Codex.EntityBase
     * @implements  Codex.IEncodingDescription
     */
    Bridge.define("Codex.ObjectModel.EncodingDescription", {
        inherits: [Codex.EntityBase,Codex.IEncodingDescription],
        fields: {
            m_Name: null,
            m_Preamble: null
        },
        props: {
            /**
             * The name of the encoding
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.EncodingDescription
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The encoding preamble
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.EncodingDescription
             * @function Preamble
             * @type Array.<number>
             */
            Preamble: {
                get: function () {
                    return this.m_Preamble;
                },
                set: function (value) {
                    this.m_Preamble = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IEncodingDescription$Name",
            "Preamble", "Codex$IEncodingDescription$Preamble"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.EncodingDescription, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IEncodingDescription$Name;
                this.m_Preamble = value.Codex$IEncodingDescription$Preamble;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.FileStatistics", {
        inherits: [Codex.EntityBase,Codex.IFileStatistics],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.FileStatistics, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Index", {
        inherits: [Codex.EntityBase,Codex.Sdk.Search.IIndex],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Index, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.LanguageInfo", {
        inherits: [Codex.EntityBase,Codex.ILanguageInfo],
        fields: {
            m_Name: null,
            m_Classifications: null
        },
        props: {
            /**
             * The name of the language
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Describes the style for classified spans. See {@link }.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Codex$ILanguageInfo$Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ILanguageInfo$Classifications: {
                get: function () {
                    return this.Classifications;
                }
            },
            /**
             * Describes the style for classified spans. See {@link }.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Classifications
             * @type System.Collections.Generic.List$1
             */
            Classifications: {
                get: function () {
                    return this.m_Classifications;
                },
                set: function (value) {
                    this.m_Classifications = value;
                }
            }
        },
        alias: ["Name", "Codex$ILanguageInfo$Name"],
        ctors: {
            init: function () {
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationStyle)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.LanguageInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$ILanguageInfo$Name;
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationStyle)).$ctor1(System.Linq.Enumerable.from(value.Codex$ILanguageInfo$Classifications).select($asm.$.Codex.ObjectModel.LanguageInfo.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.LanguageInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.LanguageInfo, {
        f1: function (_v) {
            return new Codex.ObjectModel.ClassificationStyle.ctor().CopyFrom(Codex.ObjectModel.ClassificationStyle, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IClassificationStyle, Bridge.global.Codex.ObjectModel.ClassificationStyle, v, $asm.$.Codex.ObjectModel.LanguageInfo.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.OutliningRegion", {
        inherits: [Codex.EntityBase,Codex.IOutliningRegion],
        fields: {
            m_Kind: null,
            m_Header: null,
            m_Content: null
        },
        props: {
            Kind: {
                get: function () {
                    return this.m_Kind;
                },
                set: function (value) {
                    this.m_Kind = value;
                }
            },
            /**
             * Defines the region containing the header text of the outlining region
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Codex$IOutliningRegion$Header
             * @type Codex.ILineSpan
             */
            Codex$IOutliningRegion$Header: {
                get: function () {
                    return this.Header;
                }
            },
            /**
             * Defines the region containing the header text of the outlining region
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Header
             * @type Codex.ObjectModel.LineSpan
             */
            Header: {
                get: function () {
                    return this.m_Header;
                },
                set: function (value) {
                    this.m_Header = value;
                }
            },
            /**
             * Defines the region containing the collapsible content region of the outlining region
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Codex$IOutliningRegion$Content
             * @type Codex.ILineSpan
             */
            Codex$IOutliningRegion$Content: {
                get: function () {
                    return this.Content;
                }
            },
            /**
             * Defines the region containing the collapsible content region of the outlining region
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Content
             * @type Codex.ObjectModel.LineSpan
             */
            Content: {
                get: function () {
                    return this.m_Content;
                },
                set: function (value) {
                    this.m_Content = value;
                }
            }
        },
        alias: ["Kind", "Codex$IOutliningRegion$Kind"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.OutliningRegion, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Kind = value.Codex$IOutliningRegion$Kind;
                this.m_Header = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LineSpan, Bridge.global.Codex.ObjectModel.LineSpan, this.Header, $asm.$.Codex.ObjectModel.OutliningRegion.f1);
                ;
                this.m_Content = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LineSpan, Bridge.global.Codex.ObjectModel.LineSpan, this.Content, $asm.$.Codex.ObjectModel.OutliningRegion.f1);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.OutliningRegion", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.OutliningRegion, {
        f1: function (v) {
            return new Codex.ObjectModel.LineSpan.ctor().CopyFrom$1(Codex.ObjectModel.LineSpan, v);
        }
    });

    /**
     * Documentation for a method parameter
     *
     * @public
     * @class Codex.ObjectModel.ParameterDocumentation
     * @augments Codex.EntityBase
     * @implements  Codex.IParameterDocumentation
     */
    Bridge.define("Codex.ObjectModel.ParameterDocumentation", {
        inherits: [Codex.EntityBase,Codex.IParameterDocumentation],
        fields: {
            m_Name: null,
            m_Comment: null
        },
        props: {
            /**
             * The name of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDocumentation
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The comment associated with the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDocumentation
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IParameterDocumentation$Name",
            "Comment", "Codex$IParameterDocumentation$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ParameterDocumentation, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IParameterDocumentation$Name;
                this.m_Comment = value.Codex$IParameterDocumentation$Comment;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.PropertyMap", {
        inherits: [Codex.ObjectModel.PropertyMapBase,Codex.IPropertyMap],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.PropertyMapBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.PropertyMapBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.PropertyMap, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () { }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferencedProject", {
        inherits: [Codex.EntityBase,Codex.IReferencedProject],
        fields: {
            m_ProjectId: null,
            m_Definitions: null,
            m_DisplayName: null,
            m_Properties: null
        },
        props: {
            /**
             * The identifier of the referenced project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * Used definitions for the project. Sorted.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Codex$IReferencedProject$Definitions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IReferencedProject$Definitions: {
                get: function () {
                    return this.Definitions;
                }
            },
            /**
             * Used definitions for the project. Sorted.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Definitions
             * @type System.Collections.Generic.List$1
             */
            Definitions: {
                get: function () {
                    return this.m_Definitions;
                },
                set: function (value) {
                    this.m_Definitions = value;
                }
            },
            /**
             * The display name of the project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The properties of the project. Such as Version, PublicKey, etc.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Codex$IReferencedProject$Properties
             * @type Codex.IPropertyMap
             */
            Codex$IReferencedProject$Properties: {
                get: function () {
                    return this.Properties;
                }
            },
            /**
             * The properties of the project. Such as Version, PublicKey, etc.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Properties
             * @type Codex.ObjectModel.PropertyMap
             */
            Properties: {
                get: function () {
                    return this.m_Properties;
                },
                set: function (value) {
                    this.m_Properties = value;
                }
            }
        },
        alias: [
            "ProjectId", "Codex$IReferencedProject$ProjectId",
            "DisplayName", "Codex$IReferencedProject$DisplayName"
        ],
        ctors: {
            init: function () {
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSymbol)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ReferencedProject, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IReferencedProject$ProjectId;
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSymbol)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferencedProject$Definitions).select($asm.$.Codex.ObjectModel.ReferencedProject.f2));
                this.m_DisplayName = value.Codex$IReferencedProject$DisplayName;
                this.m_Properties = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.PropertyMap, Bridge.global.Codex.ObjectModel.PropertyMap, this.Properties, $asm.$.Codex.ObjectModel.ReferencedProject.f3);
                ;
                return Bridge.cast((this), TTarget);
            },
            toString: function () {
                var $t;
                return ($t = this.DisplayName, $t != null ? $t : this.ProjectId);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferencedProject", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferencedProject, {
        f1: function (_v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IDefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, v, $asm.$.Codex.ObjectModel.ReferencedProject.f1);
        },
        f3: function (v) {
            return new Codex.ObjectModel.PropertyMap.ctor().CopyFrom(Codex.ObjectModel.PropertyMap, v);
        }
    });

    Bridge.define("Codex.ObjectModel.Repository", {
        inherits: [Codex.EntityBase,Codex.IRepository],
        fields: {
            m_Name: null,
            m_Description: null,
            m_Id: null,
            m_WebAddress: null,
            m_SourceControlWebAddress: null,
            m_FileWebAddressTransformInputRegex: null,
            m_PrimaryBranch: null,
            m_RepositoryReferences: null
        },
        props: {
            /**
             * The name fo the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Describes the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            WebAddress: {
                get: function () {
                    return this.m_WebAddress;
                },
                set: function (value) {
                    this.m_WebAddress = value;
                }
            },
            /**
             * The web address for source control of the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function SourceControlWebAddress
             * @type string
             */
            SourceControlWebAddress: {
                get: function () {
                    return this.m_SourceControlWebAddress;
                },
                set: function (value) {
                    this.m_SourceControlWebAddress = value;
                }
            },
            /**
             * The regex for extracting
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function FileWebAddressTransformInputRegex
             * @type string
             */
            FileWebAddressTransformInputRegex: {
                get: function () {
                    return this.m_FileWebAddressTransformInputRegex;
                },
                set: function (value) {
                    this.m_FileWebAddressTransformInputRegex = value;
                }
            },
            /**
             * The name of the primary branch for the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function PrimaryBranch
             * @type string
             */
            PrimaryBranch: {
                get: function () {
                    return this.m_PrimaryBranch;
                },
                set: function (value) {
                    this.m_PrimaryBranch = value;
                }
            },
            Codex$IRepository$RepositoryReferences: {
                get: function () {
                    return this.RepositoryReferences;
                }
            },
            RepositoryReferences: {
                get: function () {
                    return this.m_RepositoryReferences;
                },
                set: function (value) {
                    this.m_RepositoryReferences = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IRepository$Name",
            "Description", "Codex$IRepository$Description",
            "Id", "Codex$IRepository$Id",
            "WebAddress", "Codex$IRepository$WebAddress",
            "SourceControlWebAddress", "Codex$IRepository$SourceControlWebAddress",
            "FileWebAddressTransformInputRegex", "Codex$IRepository$FileWebAddressTransformInputRegex",
            "PrimaryBranch", "Codex$IRepository$PrimaryBranch"
        ],
        ctors: {
            init: function () {
                this.m_RepositoryReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.RepositoryReference)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Repository, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IRepository$Name;
                this.m_Description = value.Codex$IRepository$Description;
                this.m_Id = value.Codex$IRepository$Id;
                this.m_WebAddress = value.Codex$IRepository$WebAddress;
                this.m_SourceControlWebAddress = value.Codex$IRepository$SourceControlWebAddress;
                this.m_FileWebAddressTransformInputRegex = value.Codex$IRepository$FileWebAddressTransformInputRegex;
                this.m_PrimaryBranch = value.Codex$IRepository$PrimaryBranch;
                this.m_RepositoryReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.RepositoryReference)).$ctor1(System.Linq.Enumerable.from(value.Codex$IRepository$RepositoryReferences).select($asm.$.Codex.ObjectModel.Repository.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.Repository", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.Repository, {
        f1: function (_v) {
            return new Codex.ObjectModel.RepositoryReference.ctor().CopyFrom(Codex.ObjectModel.RepositoryReference, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IRepositoryReference, Bridge.global.Codex.ObjectModel.RepositoryReference, v, $asm.$.Codex.ObjectModel.Repository.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.RepositoryReference", {
        inherits: [Codex.EntityBase,Codex.IRepositoryReference],
        fields: {
            m_Name: null,
            m_Id: null
        },
        props: {
            /**
             * The name of the reference repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryReference
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Optional. Id of repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryReference
             * @function Id
             * @type string
             */
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IRepositoryReference$Name",
            "Id", "Codex$IRepositoryReference$Id"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepositoryReference, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IRepositoryReference$Name;
                this.m_Id = value.Codex$IRepositoryReference$Id;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Information for creating an ICodexRepositoryStore
     *
     * @public
     * @class Codex.ObjectModel.RepositoryStoreInfo
     * @augments Codex.EntityBase
     * @implements  Codex.IRepositoryStoreInfo
     */
    Bridge.define("Codex.ObjectModel.RepositoryStoreInfo", {
        inherits: [Codex.EntityBase,Codex.IRepositoryStoreInfo],
        fields: {
            m_Repository: null,
            m_Branch: null,
            m_Commit: null
        },
        props: {
            /**
             * The repository being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Repository
             * @type Codex.IRepository
             */
            Codex$IRepositoryStoreInfo$Repository: {
                get: function () {
                    return this.Repository;
                }
            },
            /**
             * The repository being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Repository
             * @type Codex.ObjectModel.Repository
             */
            Repository: {
                get: function () {
                    return this.m_Repository;
                },
                set: function (value) {
                    this.m_Repository = value;
                }
            },
            /**
             * The branch being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Branch
             * @type Codex.IBranch
             */
            Codex$IRepositoryStoreInfo$Branch: {
                get: function () {
                    return this.Branch;
                }
            },
            /**
             * The branch being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Branch
             * @type Codex.ObjectModel.Branch
             */
            Branch: {
                get: function () {
                    return this.m_Branch;
                },
                set: function (value) {
                    this.m_Branch = value;
                }
            },
            /**
             * The commit being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Commit
             * @type Codex.ICommit
             */
            Codex$IRepositoryStoreInfo$Commit: {
                get: function () {
                    return this.Commit;
                }
            },
            /**
             * The commit being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Commit
             * @type Codex.ObjectModel.Commit
             */
            Commit: {
                get: function () {
                    return this.m_Commit;
                },
                set: function (value) {
                    this.m_Commit = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepositoryStoreInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Repository = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Repository, Bridge.global.Codex.ObjectModel.Repository, this.Repository, $asm.$.Codex.ObjectModel.RepositoryStoreInfo.f1);
                ;
                this.m_Branch = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Branch, Bridge.global.Codex.ObjectModel.Branch, this.Branch, $asm.$.Codex.ObjectModel.RepositoryStoreInfo.f2);
                ;
                this.m_Commit = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Commit, Bridge.global.Codex.ObjectModel.Commit, this.Commit, $asm.$.Codex.ObjectModel.RepositoryStoreInfo.f3);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.RepositoryStoreInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.RepositoryStoreInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.Repository.ctor().CopyFrom(Codex.ObjectModel.Repository, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.Branch.ctor().CopyFrom(Codex.ObjectModel.Branch, v);
        },
        f3: function (v) {
            return new Codex.ObjectModel.Commit.ctor().CopyFrom$2(Codex.ObjectModel.Commit, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SearchResult", {
        inherits: [Codex.EntityBase,Codex.Sdk.Search.ISearchResult],
        fields: {
            m_TextLine: null,
            m_Definition: null
        },
        props: {
            /**
             * The text span for a text result
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SearchResult
             * @function Codex$Sdk$Search$ISearchResult$TextLine
             * @type Codex.Sdk.Search.ITextLineSpanResult
             */
            Codex$Sdk$Search$ISearchResult$TextLine: {
                get: function () {
                    return this.TextLine;
                }
            },
            /**
             * The text span for a text result
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchResult
             * @function TextLine
             * @type Codex.ObjectModel.TextLineSpanResult
             */
            TextLine: {
                get: function () {
                    return this.m_TextLine;
                },
                set: function (value) {
                    this.m_TextLine = value;
                }
            },
            /**
             * The definition of the search result
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SearchResult
             * @function Codex$Sdk$Search$ISearchResult$Definition
             * @type Codex.IDefinitionSymbol
             */
            Codex$Sdk$Search$ISearchResult$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            /**
             * The definition of the search result
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchResult
             * @function Definition
             * @type Codex.ObjectModel.DefinitionSymbol
             */
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SearchResult, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_TextLine = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.TextLineSpanResult, Bridge.global.Codex.ObjectModel.TextLineSpanResult, this.TextLine, $asm.$.Codex.ObjectModel.SearchResult.f1);
                ;
                this.m_Definition = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, this.Definition, $asm.$.Codex.ObjectModel.SearchResult.f2);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SearchResult", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SearchResult, {
        f1: function (v) {
            return new Codex.ObjectModel.TextLineSpanResult.ctor().CopyFrom$4(Codex.ObjectModel.TextLineSpanResult, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        }
    });

    /**
     * Information about a source file as defined by the source control provider
     *
     * @public
     * @class Codex.ObjectModel.SourceControlFileInfo
     * @augments Codex.EntityBase
     * @implements  Codex.ISourceControlFileInfo
     */
    Bridge.define("Codex.ObjectModel.SourceControlFileInfo", {
        inherits: [Codex.EntityBase,Codex.ISourceControlFileInfo],
        fields: {
            m_SourceControlContentId: null
        },
        props: {
            /**
             * Unique id for the source file content as defined by the source control provider (i.e. git SHA)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceControlFileInfo
             * @function SourceControlContentId
             * @type string
             */
            SourceControlContentId: {
                get: function () {
                    return this.m_SourceControlContentId;
                },
                set: function (value) {
                    this.m_SourceControlContentId = value;
                }
            }
        },
        alias: ["SourceControlContentId", "Codex$ISourceControlFileInfo$SourceControlContentId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceControlFileInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_SourceControlContentId = value.Codex$ISourceControlFileInfo$SourceControlContentId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Defines text contents of a file and associated data
     *
     * @public
     * @class Codex.ObjectModel.SourceFile
     * @augments Codex.EntityBase
     * @implements  Codex.ISourceFile
     */
    Bridge.define("Codex.ObjectModel.SourceFile", {
        inherits: [Codex.EntityBase,Codex.ISourceFile],
        fields: {
            m_Info: null,
            m_Content: null,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The information about the source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFile
             * @function Codex$ISourceFile$Info
             * @type Codex.ISourceFileInfo
             */
            Codex$ISourceFile$Info: {
                get: function () {
                    return this.Info;
                }
            },
            /**
             * The information about the source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function Info
             * @type Codex.ObjectModel.SourceFileInfo
             */
            Info: {
                get: function () {
                    return this.m_Info;
                },
                set: function (value) {
                    this.m_Info = value;
                }
            },
            /**
             * The content of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function Content
             * @type string
             */
            Content: {
                get: function () {
                    return this.m_Content;
                },
                set: function (value) {
                    this.m_Content = value;
                }
            },
            /**
             * Indicates that the file should be excluded from text search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "Content", "Codex$ISourceFile$Content",
            "ExcludeFromSearch", "Codex$ISourceFile$ExcludeFromSearch"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Info = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFileInfo, Bridge.global.Codex.ObjectModel.SourceFileInfo, this.Info, $asm.$.Codex.ObjectModel.SourceFile.f1);
                ;
                this.m_Content = value.Codex$ISourceFile$Content;
                this.m_ExcludeFromSearch = value.Codex$ISourceFile$ExcludeFromSearch;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SourceFile", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SourceFile, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceFileInfo.ctor().CopyFrom$5(Codex.ObjectModel.SourceFileInfo, v);
        }
    });

    Bridge.define("Codex.ObjectModel.StoredBoundSourceFile", {
        inherits: [Codex.EntityBase,Codex.IStoredBoundSourceFile],
        fields: {
            m_BoundSourceFile: null,
            m_CompressedClassifications: null,
            m_CompressedReferences: null
        },
        props: {
            Codex$IStoredBoundSourceFile$BoundSourceFile: {
                get: function () {
                    return this.BoundSourceFile;
                }
            },
            BoundSourceFile: {
                get: function () {
                    return this.m_BoundSourceFile;
                },
                set: function (value) {
                    this.m_BoundSourceFile = value;
                }
            },
            /**
             * Compressed list of classification spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredBoundSourceFile
             * @function CompressedClassifications
             * @type Codex.IClassificationList
             */
            CompressedClassifications: {
                get: function () {
                    return this.m_CompressedClassifications;
                },
                set: function (value) {
                    this.m_CompressedClassifications = value;
                }
            },
            /**
             * Compressed list of reference spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredBoundSourceFile
             * @function CompressedReferences
             * @type Codex.IReferenceList
             */
            CompressedReferences: {
                get: function () {
                    return this.m_CompressedReferences;
                },
                set: function (value) {
                    this.m_CompressedReferences = value;
                }
            }
        },
        alias: [
            "CompressedClassifications", "Codex$IStoredBoundSourceFile$CompressedClassifications",
            "CompressedReferences", "Codex$IStoredBoundSourceFile$CompressedReferences"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.StoredBoundSourceFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_BoundSourceFile = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.BoundSourceFile, Bridge.global.Codex.ObjectModel.BoundSourceFile, this.BoundSourceFile, $asm.$.Codex.ObjectModel.StoredBoundSourceFile.f1);
                ;
                this.m_CompressedClassifications = value.Codex$IStoredBoundSourceFile$CompressedClassifications;
                this.m_CompressedReferences = value.Codex$IStoredBoundSourceFile$CompressedReferences;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.StoredBoundSourceFile", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.StoredBoundSourceFile, {
        f1: function (v) {
            return new Codex.ObjectModel.BoundSourceFile.ctor().CopyFrom$5(Codex.ObjectModel.BoundSourceFile, v);
        }
    });

    Bridge.define("Codex.Sdk.Search.FindSymbolArgumentsBase", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase],
        fields: {
            /**
             * The symbol id of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.FindSymbolArgumentsBase
             * @type string
             */
            SymbolId: null,
            /**
             * The project id of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.FindSymbolArgumentsBase
             * @type string
             */
            ProjectId: null
        }
    });

    Bridge.define("Codex.Sdk.Search.GetSourceArguments", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.IndexQueryHitsResponse$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexQueryResponse$1(Codex.Sdk.Search.IndexQueryHits$1(T))]
    }; });

    Bridge.define("Codex.Sdk.Search.SearchArguments", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase],
        fields: {
            SearchString: null
        }
    });

    Bridge.define("Codex.IBoundSourceInfo", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISymbolSpan", {
        inherits: [Codex.ITextLineSpan],
        $kind: "interface"
    });

    /**
     * NOTE: Do not set {@link }
     *
     * @abstract
     * @public
     * @class Codex.IProjectFileLink
     * @implements  Codex.IProjectFileScopeEntity
     */
    Bridge.define("Codex.IProjectFileLink", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSearchModel", {
        inherits: [Codex.IProjectFileScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISourceFileInfo", {
        inherits: [Codex.IRepoFileScopeEntity,Codex.ISourceControlFileInfo,Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.ProjectScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.IProjectScopeEntity],
        fields: {
            m_ProjectId: null
        },
        props: {
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectScopeEntity
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: ["ProjectId", "Codex$IProjectScopeEntity$ProjectId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectFileScopeEntity", {
        inherits: [Codex.EntityBase,Codex.IProjectFileScopeEntity],
        fields: {
            m_ProjectRelativePath: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$2(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$3(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$1(Codex.ObjectModel.ProjectFileScopeEntity, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.BoundSourceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IBoundSourceSearchModel],
        fields: {
            m_TextUid: null,
            m_SourceInfo: null,
            m_BindingInfo: null,
            m_CompressedClassifications: null,
            m_CompressedReferences: null,
            m_SourceControlInfo: null
        },
        props: {
            /**
             * The unique identifier of the associated {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function TextUid
             * @type string
             */
            TextUid: {
                get: function () {
                    return this.m_TextUid;
                },
                set: function (value) {
                    this.m_TextUid = value;
                }
            },
            /**
             * Information about the source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$IBoundSourceSearchModel$SourceInfo
             * @type Codex.ISourceFileInfo
             */
            Codex$IBoundSourceSearchModel$SourceInfo: {
                get: function () {
                    return this.SourceInfo;
                }
            },
            /**
             * Information about the source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function SourceInfo
             * @type Codex.ObjectModel.SourceFileInfo
             */
            SourceInfo: {
                get: function () {
                    return this.m_SourceInfo;
                },
                set: function (value) {
                    this.m_SourceInfo = value;
                }
            },
            /**
             * The binding info
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$IBoundSourceSearchModel$BindingInfo
             * @type Codex.IBoundSourceInfo
             */
            Codex$IBoundSourceSearchModel$BindingInfo: {
                get: function () {
                    return this.BindingInfo;
                }
            },
            /**
             * The binding info
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function BindingInfo
             * @type Codex.ObjectModel.BoundSourceInfo
             */
            BindingInfo: {
                get: function () {
                    return this.m_BindingInfo;
                },
                set: function (value) {
                    this.m_BindingInfo = value;
                }
            },
            /**
             * Compressed list of classification spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function CompressedClassifications
             * @type Codex.IClassificationList
             */
            CompressedClassifications: {
                get: function () {
                    return this.m_CompressedClassifications;
                },
                set: function (value) {
                    this.m_CompressedClassifications = value;
                }
            },
            /**
             * Compressed list of reference spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function CompressedReferences
             * @type Codex.IReferenceList
             */
            CompressedReferences: {
                get: function () {
                    return this.m_CompressedReferences;
                },
                set: function (value) {
                    this.m_CompressedReferences = value;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        alias: [
            "TextUid", "Codex$IBoundSourceSearchModel$TextUid",
            "CompressedClassifications", "Codex$IBoundSourceSearchModel$CompressedClassifications",
            "CompressedReferences", "Codex$IBoundSourceSearchModel$CompressedReferences"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.BoundSourceSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.BoundSourceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_TextUid = value.Codex$IBoundSourceSearchModel$TextUid;
                this.m_SourceInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFileInfo, Bridge.global.Codex.ObjectModel.SourceFileInfo, this.SourceInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f2);
                ;
                this.m_BindingInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.BoundSourceInfo, Bridge.global.Codex.ObjectModel.BoundSourceInfo, this.BindingInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f3);
                ;
                this.m_CompressedClassifications = value.Codex$IBoundSourceSearchModel$CompressedClassifications;
                this.m_CompressedReferences = value.Codex$IBoundSourceSearchModel$CompressedReferences;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            },
            OnDeserializedCore: function () {
                if (this.CompressedClassifications != null) {
                    this.BindingInfo.Classifications = this.CompressedClassifications.Codex$IClassificationList$ToList();
                }

                if (this.CompressedReferences != null) {
                    this.BindingInfo.References = this.CompressedReferences.Codex$IReferenceList$ToList();
                }

                Codex.ObjectModel.SearchEntity.prototype.OnDeserializedCore.call(this);
            },
            OnSerializingCore: function () {
                if (this.CompressedClassifications != null) {
                    this.BindingInfo.Classifications = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ClassificationSpan).Array;
                }

                if (this.CompressedReferences != null) {
                    this.BindingInfo.References = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ReferenceSpan).Array;
                }

                Codex.ObjectModel.SearchEntity.prototype.OnSerializingCore.call(this);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.SourceFileInfo.ctor().CopyFrom$5(Codex.ObjectModel.SourceFileInfo, v);
        },
        f3: function (v) {
            return new Codex.ObjectModel.BoundSourceInfo.ctor().CopyFrom$4(Codex.ObjectModel.BoundSourceInfo, v);
        }
    });

    /**
     * Defines a classified span of text
     *
     * @public
     * @class Codex.ObjectModel.ClassificationSpan
     * @augments Codex.ObjectModel.Span
     * @implements  Codex.IClassificationSpan
     */
    Bridge.define("Codex.ObjectModel.ClassificationSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.IClassificationSpan],
        fields: {
            m_DefaultClassificationColor: 0,
            m_Classification: null,
            m_LocalGroupId: 0
        },
        props: {
            /**
             * The default classification color for the span. This is used for
             contexts where a mapping from classification id to color is not
             available.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function DefaultClassificationColor
             * @type number
             */
            DefaultClassificationColor: {
                get: function () {
                    return this.m_DefaultClassificationColor;
                },
                set: function (value) {
                    this.m_DefaultClassificationColor = value;
                }
            },
            /**
             * The classification identifier for the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function Classification
             * @type string
             */
            Classification: {
                get: function () {
                    return this.m_Classification;
                },
                set: function (value) {
                    this.m_Classification = value;
                }
            },
            /**
             * The identifier to the local group of spans which refer to the same common symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function LocalGroupId
             * @type number
             */
            LocalGroupId: {
                get: function () {
                    return this.m_LocalGroupId;
                },
                set: function (value) {
                    this.m_LocalGroupId = value;
                }
            }
        },
        alias: [
            "DefaultClassificationColor", "Codex$IClassificationSpan$DefaultClassificationColor",
            "Classification", "Codex$IClassificationSpan$Classification",
            "LocalGroupId", "Codex$IClassificationSpan$LocalGroupId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ClassificationSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DefaultClassificationColor = value.Codex$IClassificationSpan$DefaultClassificationColor;
                this.m_Classification = value.Codex$IClassificationSpan$Classification;
                this.m_LocalGroupId = value.Codex$IClassificationSpan$LocalGroupId;
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () {
                this.DefaultClassificationColor = -1;
                Codex.ObjectModel.Span.prototype.Initialize.call(this);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CommitScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.ICommitScopeEntity],
        fields: {
            m_CommitId: null
        },
        props: {
            /**
             * The unique identifier for this commit/changeset in version control
             (i.e. git commit hash or TFS changeset number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitScopeEntity
             * @function CommitId
             * @type string
             */
            CommitId: {
                get: function () {
                    return this.m_CommitId;
                },
                set: function (value) {
                    this.m_CommitId = value;
                }
            }
        },
        alias: ["CommitId", "Codex$ICommitScopeEntity$CommitId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_CommitId = value.Codex$ICommitScopeEntity$CommitId;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Represents a changed file in a commit
     *
     * @public
     * @class Codex.ObjectModel.CommitChangedFile
     * @augments Codex.ObjectModel.CommitFileLink
     * @implements  Codex.ICommitChangedFile
     */
    Bridge.define("Codex.ObjectModel.CommitChangedFile", {
        inherits: [Codex.ObjectModel.CommitFileLink,Codex.ICommitChangedFile],
        fields: {
            m_ChangeKind: 0,
            m_OriginalFilePath: null
        },
        props: {
            /**
             * The type of change applied to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitChangedFile
             * @function ChangeKind
             * @type Codex.FileChangeKind
             */
            ChangeKind: {
                get: function () {
                    return this.m_ChangeKind;
                },
                set: function (value) {
                    this.m_ChangeKind = value;
                }
            },
            /**
             * For a renamed file, the path to the file prior to the rename
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitChangedFile
             * @function OriginalFilePath
             * @type string
             */
            OriginalFilePath: {
                get: function () {
                    return this.m_OriginalFilePath;
                },
                set: function (value) {
                    this.m_OriginalFilePath = value;
                }
            }
        },
        alias: [
            "ChangeKind", "Codex$ICommitChangedFile$ChangeKind",
            "OriginalFilePath", "Codex$ICommitChangedFile$OriginalFilePath"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitChangedFile, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ChangeKind = value.Codex$ICommitChangedFile$ChangeKind;
                this.m_OriginalFilePath = value.Codex$ICommitChangedFile$OriginalFilePath;
                Codex.ObjectModel.CommitFileLink.prototype.CopyFrom.call(this, Codex.ObjectModel.CommitFileLink, Bridge.cast((value), Codex.ICommitFileLink));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.RepoFileScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.IRepoFileScopeEntity],
        fields: {
            m_RepoRelativePath: null
        },
        props: {
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepoFileScopeEntity
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            }
        },
        alias: ["RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RepoFileScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * The set of files present in the repository at a given commit.
     *
     * @public
     * @class Codex.ObjectModel.CommitFilesSearchModel
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.ICommitFilesSearchModel
     */
    Bridge.define("Codex.ObjectModel.CommitFilesSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ICommitFilesSearchModel],
        fields: {
            m_CommitFiles: null,
            m_CommitId: null,
            m_RepositoryName: null
        },
        props: {
            Codex$ICommitFilesSearchModel$CommitFiles: {
                get: function () {
                    return this.CommitFiles;
                }
            },
            CommitFiles: {
                get: function () {
                    return this.m_CommitFiles;
                },
                set: function (value) {
                    this.m_CommitFiles = value;
                }
            },
            /**
             * The unique identifier for this commit/changeset in version control
             (i.e. git commit hash or TFS changeset number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesSearchModel
             * @function CommitId
             * @type string
             */
            CommitId: {
                get: function () {
                    return this.m_CommitId;
                },
                set: function (value) {
                    this.m_CommitId = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: [
            "CommitId", "Codex$ICommitScopeEntity$CommitId",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"
        ],
        ctors: {
            init: function () {
                this.m_CommitFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitFilesSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.CommitFilesSearchModel, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.CommitFilesSearchModel, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_CommitId = value.Codex$ICommitScopeEntity$CommitId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_CommitFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommitFilesSearchModel$CommitFiles).select($asm.$.Codex.ObjectModel.CommitFilesSearchModel.f2));
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_CommitId = Bridge.cast((value), Codex.ICommitScopeEntity).Codex$ICommitScopeEntity$CommitId;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitFilesSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitFilesSearchModel, {
        f1: function (_v) {
            return new Codex.ObjectModel.CommitFileLink.ctor().CopyFrom(Codex.ObjectModel.CommitFileLink, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICommitFileLink, Bridge.global.Codex.ObjectModel.CommitFileLink, v, $asm.$.Codex.ObjectModel.CommitFilesSearchModel.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.CommitSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ICommitSearchModel],
        fields: {
            m_Commit: null
        },
        props: {
            Codex$ICommitSearchModel$Commit: {
                get: function () {
                    return this.Commit;
                }
            },
            Commit: {
                get: function () {
                    return this.m_Commit;
                },
                set: function (value) {
                    this.m_Commit = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Commit = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Commit, Bridge.global.Codex.ObjectModel.Commit, this.Commit, $asm.$.Codex.ObjectModel.CommitSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.Commit.ctor().CopyFrom$2(Codex.ObjectModel.Commit, v);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IDefinitionSearchModel],
        fields: {
            m_Definition: null,
            m_Keywords: null
        },
        props: {
            Codex$IDefinitionSearchModel$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            },
            /**
             * Keywords are additional terms which can be used to find a given symbol.
             NOTE: Keywords can only be used to select from symbols which have
             a primary term match
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSearchModel
             * @function Codex$IDefinitionSearchModel$Keywords
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDefinitionSearchModel$Keywords: {
                get: function () {
                    return this.Keywords;
                }
            },
            /**
             * Keywords are additional terms which can be used to find a given symbol.
             NOTE: Keywords can only be used to select from symbols which have
             a primary term match
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSearchModel
             * @function Keywords
             * @type System.Collections.Generic.List$1
             */
            Keywords: {
                get: function () {
                    return this.m_Keywords;
                },
                set: function (value) {
                    this.m_Keywords = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Keywords = new (System.Collections.Generic.List$1(System.String)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.DefinitionSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Definition = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, this.Definition, $asm.$.Codex.ObjectModel.DefinitionSearchModel.f1);
                ;
                this.m_Keywords = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$IDefinitionSearchModel$Keywords);
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.IDefinitionSpan],
        fields: {
            m_Definition: null,
            m_Parameters: null
        },
        props: {
            /**
             * The definition symbol referred to by the span
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Codex$IDefinitionSpan$Definition
             * @type Codex.IDefinitionSymbol
             */
            Codex$IDefinitionSpan$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            /**
             * The definition symbol referred to by the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Definition
             * @type Codex.ObjectModel.DefinitionSymbol
             */
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            },
            /**
             * Gets the definitions for parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Codex$IDefinitionSpan$Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDefinitionSpan$Parameters: {
                get: function () {
                    return this.Parameters;
                }
            },
            /**
             * Gets the definitions for parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Parameters: {
                get: function () {
                    return this.m_Parameters;
                },
                set: function (value) {
                    this.m_Parameters = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Parameters = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ParameterDefinitionSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.DefinitionSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Definition = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, this.Definition, $asm.$.Codex.ObjectModel.DefinitionSpan.f1);
                ;
                this.m_Parameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDefinitionSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDefinitionSpan$Parameters).select($asm.$.Codex.ObjectModel.DefinitionSpan.f3));
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSpan", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSpan, {
        f1: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.ParameterDefinitionSpan.ctor().CopyFrom$2(Codex.ObjectModel.ParameterDefinitionSpan, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IParameterDefinitionSpan, Bridge.global.Codex.ObjectModel.ParameterDefinitionSpan, v, $asm.$.Codex.ObjectModel.DefinitionSpan.f2);
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSymbol", {
        inherits: [Codex.ObjectModel.Symbol,Codex.IReferenceSymbol],
        fields: {
            m_ReferenceKind: null,
            m_IsImplicitlyDeclared: false,
            m_ExcludeFromDefaultSearch: false,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The kind of reference. This is used to group references.
             (i.e. for C#(aka .NET) MethodOverride, InterfaceMemberImplementation, InterfaceImplementation, etc.)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ReferenceKind
             * @type string
             */
            ReferenceKind: {
                get: function () {
                    return this.m_ReferenceKind;
                },
                set: function (value) {
                    this.m_ReferenceKind = value;
                }
            },
            /**
             * Indicates the corresponding definition is implicitly declared and therefore this should not be
             used for find all references search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function IsImplicitlyDeclared
             * @type boolean
             */
            IsImplicitlyDeclared: {
                get: function () {
                    return this.m_IsImplicitlyDeclared;
                },
                set: function (value) {
                    this.m_IsImplicitlyDeclared = value;
                }
            },
            /**
             * Indicates if the symbol should be excluded from the definition/find all references search (by default).
             Symbol will only be included if kind is explicitly specified
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ExcludeFromDefaultSearch
             * @type boolean
             */
            ExcludeFromDefaultSearch: {
                get: function () {
                    return this.m_ExcludeFromDefaultSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromDefaultSearch = value;
                }
            },
            /**
             * Indicates if the symbol should NEVER be included in the definition/find all references search.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "ReferenceKind", "Codex$IReferenceSymbol$ReferenceKind",
            "IsImplicitlyDeclared", "Codex$IReferenceSymbol$IsImplicitlyDeclared",
            "ExcludeFromDefaultSearch", "Codex$IReferenceSymbol$ExcludeFromDefaultSearch",
            "ExcludeFromSearch", "Codex$IReferenceSymbol$ExcludeFromSearch"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Symbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Symbol.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Symbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ReferenceKind = value.Codex$IReferenceSymbol$ReferenceKind;
                this.m_IsImplicitlyDeclared = value.Codex$IReferenceSymbol$IsImplicitlyDeclared;
                this.m_ExcludeFromDefaultSearch = value.Codex$IReferenceSymbol$ExcludeFromDefaultSearch;
                this.m_ExcludeFromSearch = value.Codex$IReferenceSymbol$ExcludeFromSearch;
                Codex.ObjectModel.Symbol.prototype.CopyFrom.call(this, Codex.ObjectModel.Symbol, Bridge.cast((value), Codex.ICodeSymbol));
                return Bridge.cast((this), TTarget);
            },
            toString: function () {
                return (this.ReferenceKind || "") + " " + (Codex.ObjectModel.Symbol.prototype.toString.call(this) || "");
            }
        }
    });

    Bridge.define("Codex.ObjectModel.LanguageSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ILanguageSearchModel],
        fields: {
            m_Language: null
        },
        props: {
            Codex$ILanguageSearchModel$Language: {
                get: function () {
                    return this.Language;
                }
            },
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.LanguageSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Language = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LanguageInfo, Bridge.global.Codex.ObjectModel.LanguageInfo, this.Language, $asm.$.Codex.ObjectModel.LanguageSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.LanguageSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.LanguageSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.LanguageInfo.ctor().CopyFrom(Codex.ObjectModel.LanguageInfo, v);
        }
    });

    Bridge.define("Codex.ObjectModel.LineSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.ILineSpan],
        fields: {
            m_LineIndex: null,
            m_LineNumber: null,
            m_LineSpanStart: 0,
            m_LineOffset: 0
        },
        props: {
            /**
             * The 0-based index of the line containing the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineIndex
             * @type number
             */
            LineIndex: {
                get: function () {
                    return this.CoerceLineIndex(this.m_LineIndex);
                },
                set: function (value) {
                    this.m_LineIndex = value;
                }
            },
            /**
             * The 1-based line number of the line containing the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineNumber
             * @type number
             */
            LineNumber: {
                get: function () {
                    return this.CoerceLineNumber(this.m_LineNumber);
                },
                set: function (value) {
                    this.m_LineNumber = value;
                }
            },
            /**
             * The character position where the span starts in the line text
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineSpanStart
             * @type number
             */
            LineSpanStart: {
                get: function () {
                    return this.m_LineSpanStart;
                },
                set: function (value) {
                    this.m_LineSpanStart = value;
                }
            },
            /**
             * If positive, the offset of the line span from the beginning of the line
             If negative, the offset of the linespan from the end of the next line
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineOffset
             * @type number
             */
            LineOffset: {
                get: function () {
                    return this.m_LineOffset;
                },
                set: function (value) {
                    this.m_LineOffset = value;
                }
            }
        },
        alias: [
            "LineIndex", "Codex$ILineSpan$LineIndex",
            "LineNumber", "Codex$ILineSpan$LineNumber",
            "LineSpanStart", "Codex$ILineSpan$LineSpanStart",
            "LineOffset", "Codex$ILineSpan$LineOffset"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.LineSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_LineIndex = value.Codex$ILineSpan$LineIndex;
                this.m_LineNumber = value.Codex$ILineSpan$LineNumber;
                this.m_LineSpanStart = value.Codex$ILineSpan$LineSpanStart;
                this.m_LineOffset = value.Codex$ILineSpan$LineOffset;
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            },
            CoerceLineIndex: function (value) {
                if (value == null || (System.Nullable.lte(value, 0) && this.m_LineNumber != null)) {
                    if (this.m_LineNumber != null) {
                        // Line number is 1-based whereas this value is 0-based
                        return ((System.Nullable.getValue(this.m_LineNumber) - 1) | 0);
                    } else {
                        return 0;
                    }
                }

                return System.Nullable.getValue(value);
            },
            CoerceLineNumber: function (value) {
                if (value == null || (System.Nullable.eq(value, 1) && this.m_LineIndex != null)) {
                    if (this.m_LineIndex != null) {
                        // Line index is 0-based whereas this value is 1-based
                        return ((System.Nullable.getValue(this.m_LineIndex) + 1) | 0);
                    } else {
                        return 1;
                    }
                }

                return System.Nullable.getValue(value);
            },
            OnDeserializedCore: function () {
                Codex.ObjectModel.Span.prototype.OnDeserializedCore.call(this);
            },
            OnSerializingCore: function () {
                Codex.ObjectModel.Span.prototype.OnSerializingCore.call(this);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectReferenceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IProjectReferenceSearchModel],
        fields: {
            m_ProjectReference: null,
            m_ProjectId: null,
            m_RepositoryName: null
        },
        props: {
            Codex$IProjectReferenceSearchModel$ProjectReference: {
                get: function () {
                    return this.ProjectReference;
                }
            },
            ProjectReference: {
                get: function () {
                    return this.m_ProjectReference;
                },
                set: function (value) {
                    this.m_ProjectReference = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectReferenceSearchModel
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectReferenceSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: [
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectReference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.ReferencedProject, Bridge.global.Codex.ObjectModel.ReferencedProject, this.ProjectReference, $asm.$.Codex.ObjectModel.ProjectReferenceSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ProjectReferenceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ProjectReferenceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferencedProject.ctor().CopyFrom(Codex.ObjectModel.ReferencedProject, v);
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IProjectSearchModel],
        fields: {
            m_Project: null
        },
        props: {
            Codex$IProjectSearchModel$Project: {
                get: function () {
                    return this.Project;
                }
            },
            Project: {
                get: function () {
                    return this.m_Project;
                },
                set: function (value) {
                    this.m_Project = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Project = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.AnalyzedProject, Bridge.global.Codex.ObjectModel.AnalyzedProject, this.Project, $asm.$.Codex.ObjectModel.ProjectSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ProjectSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ProjectSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.AnalyzedProject.ctor().CopyFrom$2(Codex.ObjectModel.AnalyzedProject, v);
        }
    });

    Bridge.define("Codex.ObjectModel.PropertySearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IPropertySearchModel],
        fields: {
            m_Key: null,
            m_Value: null,
            m_OwnerId: null
        },
        props: {
            /**
             * The key of the property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function Key
             * @type string
             */
            Key: {
                get: function () {
                    return this.m_Key;
                },
                set: function (value) {
                    this.m_Key = value;
                }
            },
            /**
             * The value of the property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function Value
             * @type string
             */
            Value: {
                get: function () {
                    return this.m_Value;
                },
                set: function (value) {
                    this.m_Value = value;
                }
            },
            /**
             * The identifier of the object owning this property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function OwnerId
             * @type string
             */
            OwnerId: {
                get: function () {
                    return this.m_OwnerId;
                },
                set: function (value) {
                    this.m_OwnerId = value;
                }
            }
        },
        alias: [
            "Key", "Codex$IPropertySearchModel$Key",
            "Value", "Codex$IPropertySearchModel$Value",
            "OwnerId", "Codex$IPropertySearchModel$OwnerId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.PropertySearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Key = value.Codex$IPropertySearchModel$Key;
                this.m_Value = value.Codex$IPropertySearchModel$Value;
                this.m_OwnerId = value.Codex$IPropertySearchModel$OwnerId;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * In order to compute a stable integral id for each entity. This type is used to store into a 'follow' index which
     stores entities of this type using the {@link } of the corresponding search entity. Then the
     sequence number assigned by ElasticSearch is used as the shard stable id ({@link })
     for the entity. This approach is used in order to ensure that the stable id appears as an explicit field in the document rather
     which allows configuration of how the field is indexed (not true for sequence number field without code changes to ES).
     *
     * @public
     * @class Codex.ObjectModel.RegisteredEntity
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.IRegisteredEntity
     */
    Bridge.define("Codex.ObjectModel.RegisteredEntity", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IRegisteredEntity],
        fields: {
            m_DateAdded: null
        },
        props: {
            /**
             * The date in which the entity was registered (i.e. added to the store)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RegisteredEntity
             * @function DateAdded
             * @type System.DateTime
             */
            DateAdded: {
                get: function () {
                    return this.m_DateAdded;
                },
                set: function (value) {
                    this.m_DateAdded = value;
                }
            }
        },
        alias: ["DateAdded", "Codex$IRegisteredEntity$DateAdded"],
        ctors: {
            init: function () {
                this.m_DateAdded = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RegisteredEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DateAdded = value.Codex$IRegisteredEntity$DateAdded;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.RepositorySearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IRepositorySearchModel],
        fields: {
            m_Repository: null
        },
        props: {
            Codex$IRepositorySearchModel$Repository: {
                get: function () {
                    return this.Repository;
                }
            },
            Repository: {
                get: function () {
                    return this.m_Repository;
                },
                set: function (value) {
                    this.m_Repository = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RepositorySearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Repository = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Repository, Bridge.global.Codex.ObjectModel.Repository, this.Repository, $asm.$.Codex.ObjectModel.RepositorySearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.RepositorySearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.RepositorySearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.Repository.ctor().CopyFrom(Codex.ObjectModel.Repository, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SourceSearchModelBase", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ISourceSearchModelBase],
        fields: {
            m_SourceControlInfo: null
        },
        props: {
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceSearchModelBase
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceSearchModelBase
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.SourceSearchModelBase, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.SourceSearchModelBase.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SourceSearchModelBase", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SourceSearchModelBase, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, v);
        }
    });

    /**
     * Defines a stored filter which matches entities in a particular index shard in a stable manner
     *
     * @public
     * @class Codex.ObjectModel.StoredFilter
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.IStoredFilter
     */
    Bridge.define("Codex.ObjectModel.StoredFilter", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IStoredFilter],
        fields: {
            m_DateUpdated: null,
            m_IndexName: null,
            m_Shard: 0,
            m_StableIds: null,
            m_BaseUids: null,
            m_UnionFilters: null,
            m_Filter: null,
            m_FilterHash: null,
            m_FilterCount: 0
        },
        props: {
            /**
             * The time of the last update to the stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function DateUpdated
             * @type System.DateTime
             */
            DateUpdated: {
                get: function () {
                    return this.m_DateUpdated;
                },
                set: function (value) {
                    this.m_DateUpdated = value;
                }
            },
            /**
             * The name of the index to which the stored filter applies
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function IndexName
             * @type string
             */
            IndexName: {
                get: function () {
                    return this.m_IndexName;
                },
                set: function (value) {
                    this.m_IndexName = value;
                }
            },
            /**
             * The shard to which the stored filter applies
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Shard
             * @type number
             */
            Shard: {
                get: function () {
                    return this.m_Shard;
                },
                set: function (value) {
                    this.m_Shard = value;
                }
            },
            /**
             * List of stable ids to include in the stored filter.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$StableIds
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$StableIds: {
                get: function () {
                    return this.StableIds;
                }
            },
            /**
             * List of stable ids to include in the stored filter.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function StableIds
             * @type System.Collections.Generic.List$1
             */
            StableIds: {
                get: function () {
                    return this.m_StableIds;
                },
                set: function (value) {
                    this.m_StableIds = value;
                }
            },
            /**
             * List of uids to for stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$BaseUids
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$BaseUids: {
                get: function () {
                    return this.BaseUids;
                }
            },
            /**
             * List of uids to for stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function BaseUids
             * @type System.Collections.Generic.List$1
             */
            BaseUids: {
                get: function () {
                    return this.m_BaseUids;
                },
                set: function (value) {
                    this.m_BaseUids = value;
                }
            },
            /**
             * List of stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$UnionFilters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$UnionFilters: {
                get: function () {
                    return this.UnionFilters;
                }
            },
            /**
             * List of stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function UnionFilters
             * @type System.Collections.Generic.List$1
             */
            UnionFilters: {
                get: function () {
                    return this.m_UnionFilters;
                },
                set: function (value) {
                    this.m_UnionFilters = value;
                }
            },
            /**
             * The stored filter bit set which matches the stored filter documents
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Filter
             * @type Array.<number>
             */
            Filter: {
                get: function () {
                    return this.m_Filter;
                },
                set: function (value) {
                    this.m_Filter = value;
                }
            },
            /**
             * The hash of {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function FilterHash
             * @type string
             */
            FilterHash: {
                get: function () {
                    return this.m_FilterHash;
                },
                set: function (value) {
                    this.m_FilterHash = value;
                }
            },
            /**
             * The count of elements matched by {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function FilterCount
             * @type number
             */
            FilterCount: {
                get: function () {
                    return this.m_FilterCount;
                },
                set: function (value) {
                    this.m_FilterCount = value;
                }
            }
        },
        alias: [
            "DateUpdated", "Codex$IStoredFilter$DateUpdated",
            "IndexName", "Codex$IStoredFilter$IndexName",
            "Shard", "Codex$IStoredFilter$Shard",
            "Filter", "Codex$IStoredFilter$Filter",
            "FilterHash", "Codex$IStoredFilter$FilterHash",
            "FilterCount", "Codex$IStoredFilter$FilterCount"
        ],
        ctors: {
            init: function () {
                this.m_DateUpdated = System.DateTime.getDefaultValue();
                this.m_StableIds = new (System.Collections.Generic.List$1(System.Int64)).ctor();
                this.m_BaseUids = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.m_UnionFilters = new (System.Collections.Generic.List$1(System.Array.type(System.Byte))).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.StoredFilter, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DateUpdated = value.Codex$IStoredFilter$DateUpdated;
                this.m_IndexName = value.Codex$IStoredFilter$IndexName;
                this.m_Shard = value.Codex$IStoredFilter$Shard;
                this.m_StableIds = new (System.Collections.Generic.List$1(System.Int64)).$ctor1(value.Codex$IStoredFilter$StableIds);
                this.m_BaseUids = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$IStoredFilter$BaseUids);
                this.m_UnionFilters = new (System.Collections.Generic.List$1(System.Array.type(System.Byte))).$ctor1(value.Codex$IStoredFilter$UnionFilters);
                this.m_Filter = value.Codex$IStoredFilter$Filter;
                this.m_FilterHash = value.Codex$IStoredFilter$FilterHash;
                this.m_FilterCount = value.Codex$IStoredFilter$FilterCount;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.ITextLineSpanResult", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.TextSourceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ITextSourceSearchModel],
        fields: {
            m_File: null,
            m_SourceControlInfo: null
        },
        props: {
            Codex$ITextSourceSearchModel$File: {
                get: function () {
                    return this.File;
                }
            },
            File: {
                get: function () {
                    return this.m_File;
                },
                set: function (value) {
                    this.m_File = value;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.TextSourceSearchModel
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TextSourceSearchModel
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.TextSourceSearchModel, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.TextSourceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.TextSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_File = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFile, Bridge.global.Codex.ObjectModel.SourceFile, this.File, $asm.$.Codex.ObjectModel.TextSourceSearchModel.f2);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.TextSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.TextSourceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.TextSourceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.SourceFile.ctor().CopyFrom(Codex.ObjectModel.SourceFile, v);
        }
    });

    /**
     * Documentation for typed parameter
     *
     * @public
     * @class Codex.ObjectModel.TypedParameterDocumentation
     * @augments Codex.ObjectModel.ParameterDocumentation
     * @implements  Codex.ITypedParameterDocumentation
     */
    Bridge.define("Codex.ObjectModel.TypedParameterDocumentation", {
        inherits: [Codex.ObjectModel.ParameterDocumentation,Codex.ITypedParameterDocumentation],
        fields: {
            m_Type: null
        },
        props: {
            /**
             * The type of the parameter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.TypedParameterDocumentation
             * @function Codex$ITypedParameterDocumentation$Type
             * @type Codex.IDocumentationReferenceSymbol
             */
            Codex$ITypedParameterDocumentation$Type: {
                get: function () {
                    return this.Type;
                }
            },
            /**
             * The type of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TypedParameterDocumentation
             * @function Type
             * @type Codex.ObjectModel.DocumentationReferenceSymbol
             */
            Type: {
                get: function () {
                    return this.m_Type;
                },
                set: function (value) {
                    this.m_Type = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.TypedParameterDocumentation, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Type = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DocumentationReferenceSymbol, Bridge.global.Codex.ObjectModel.DocumentationReferenceSymbol, this.Type, $asm.$.Codex.ObjectModel.TypedParameterDocumentation.f1);
                ;
                Codex.ObjectModel.ParameterDocumentation.prototype.CopyFrom.call(this, Codex.ObjectModel.ParameterDocumentation, Bridge.cast((value), Codex.IParameterDocumentation));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.TypedParameterDocumentation", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.TypedParameterDocumentation, {
        f1: function (v) {
            return new Codex.ObjectModel.DocumentationReferenceSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, v);
        }
    });

    Bridge.define("Codex.Sdk.Search.FindAllReferencesArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.FindDefinitionArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.FindDefinitionLocationArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    /**
     * Represents a source file with associated semantic bindings
     *
     * @abstract
     * @public
     * @class Codex.IBoundSourceFile
     * @implements  Codex.IBoundSourceInfo
     */
    Bridge.define("Codex.IBoundSourceFile", {
        inherits: [Codex.IBoundSourceInfo],
        $kind: "interface"
    });

    /**
     * A specialized reference span referring to a parameter to a method/property
     *
     * @abstract
     * @public
     * @class Codex.IParameterReferenceSpan
     * @implements  Codex.ISymbolSpan
     */
    Bridge.define("Codex.IParameterReferenceSpan", {
        inherits: [Codex.ISymbolSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSpan", {
        inherits: [Codex.ISymbolSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.AnalyzedProject", {
        inherits: [Codex.ObjectModel.ProjectScopeEntity,Codex.IProject],
        fields: {
            m_ProjectKind: null,
            m_Files: null,
            m_ProjectReferences: null
        },
        props: {
            /**
             * The project kind (see {@link })
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function ProjectKind
             * @type string
             */
            ProjectKind: {
                get: function () {
                    return this.m_ProjectKind;
                },
                set: function (value) {
                    this.m_ProjectKind = value;
                }
            },
            /**
             * References to files in the project
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Codex$IProject$Files
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IProject$Files: {
                get: function () {
                    return this.Files;
                }
            },
            /**
             * References to files in the project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Files
             * @type System.Collections.Generic.List$1
             */
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            },
            /**
             * Descriptions of referenced projects and used definitions from the projects
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Codex$IProject$ProjectReferences
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IProject$ProjectReferences: {
                get: function () {
                    return this.ProjectReferences;
                }
            },
            /**
             * Descriptions of referenced projects and used definitions from the projects
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function ProjectReferences
             * @type System.Collections.Generic.List$1
             */
            ProjectReferences: {
                get: function () {
                    return this.m_ProjectReferences;
                },
                set: function (value) {
                    this.m_ProjectReferences = value;
                }
            }
        },
        alias: ["ProjectKind", "Codex$IProject$ProjectKind"],
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.ProjectFileLink)).ctor();
                this.m_ProjectReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferencedProject)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.AnalyzedProject, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectKind = value.Codex$IProject$ProjectKind;
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.ProjectFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$IProject$Files).select($asm.$.Codex.ObjectModel.AnalyzedProject.f2));
                this.m_ProjectReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferencedProject)).$ctor1(System.Linq.Enumerable.from(value.Codex$IProject$ProjectReferences).select($asm.$.Codex.ObjectModel.AnalyzedProject.f4));
                Codex.ObjectModel.ProjectScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ProjectScopeEntity, Bridge.cast((value), Codex.IProjectScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.AnalyzedProject", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.AnalyzedProject, {
        f1: function (_v) {
            return new Codex.ObjectModel.ProjectFileLink.ctor().CopyFrom$4(Codex.ObjectModel.ProjectFileLink, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IProjectFileLink, Bridge.global.Codex.ObjectModel.ProjectFileLink, v, $asm.$.Codex.ObjectModel.AnalyzedProject.f1);
        },
        f3: function (_v) {
            return new Codex.ObjectModel.ReferencedProject.ctor().CopyFrom(Codex.ObjectModel.ReferencedProject, _v);
        },
        f4: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IReferencedProject, Bridge.global.Codex.ObjectModel.ReferencedProject, v, $asm.$.Codex.ObjectModel.AnalyzedProject.f3);
        }
    });

    Bridge.define("Codex.ObjectModel.BoundSourceInfo", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.IBoundSourceInfo],
        fields: {
            m_ReferenceCount: null,
            m_DefinitionCount: null,
            m_Language: null,
            m_References: null,
            m_Definitions: null,
            m_Classifications: null,
            m_OutliningRegions: null,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The number of references in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function ReferenceCount
             * @type number
             */
            ReferenceCount: {
                get: function () {
                    return this.CoerceReferenceCount(this.m_ReferenceCount);
                },
                set: function (value) {
                    this.m_ReferenceCount = value;
                }
            },
            /**
             * The number of definitions in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function DefinitionCount
             * @type number
             */
            DefinitionCount: {
                get: function () {
                    return this.CoerceDefinitionCount(this.m_DefinitionCount);
                },
                set: function (value) {
                    this.m_DefinitionCount = value;
                }
            },
            /**
             * The language of the file
             TODO: Remove
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Language
             * @type string
             */
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            },
            /**
             * References for the document. Sorted. May overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$References: {
                get: function () {
                    return this.References;
                }
            },
            /**
             * References for the document. Sorted. May overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            References: {
                get: function () {
                    return this.m_References;
                },
                set: function (value) {
                    this.m_References = value;
                }
            },
            /**
             * Definitions for the document. Sorted. No overlap?
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$Definitions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$Definitions: {
                get: function () {
                    return this.Definitions;
                }
            },
            /**
             * Definitions for the document. Sorted. No overlap?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Definitions
             * @type System.Collections.Generic.List$1
             */
            Definitions: {
                get: function () {
                    return this.m_Definitions;
                },
                set: function (value) {
                    this.m_Definitions = value;
                }
            },
            /**
             * Classifications for the document. Sorted by start index. No overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$Classifications: {
                get: function () {
                    return this.Classifications;
                }
            },
            /**
             * Classifications for the document. Sorted by start index. No overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Classifications: {
                get: function () {
                    return this.m_Classifications;
                },
                set: function (value) {
                    this.m_Classifications = value;
                }
            },
            /**
             * Outlining regions for the document. May overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$OutliningRegions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$OutliningRegions: {
                get: function () {
                    return this.OutliningRegions;
                }
            },
            /**
             * Outlining regions for the document. May overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function OutliningRegions
             * @type System.Collections.Generic.List$1
             */
            OutliningRegions: {
                get: function () {
                    return this.m_OutliningRegions;
                },
                set: function (value) {
                    this.m_OutliningRegions = value;
                }
            },
            /**
             * Indicates that the file should be excluded from text search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "ReferenceCount", "Codex$IBoundSourceInfo$ReferenceCount",
            "DefinitionCount", "Codex$IBoundSourceInfo$DefinitionCount",
            "Language", "Codex$IBoundSourceInfo$Language",
            "ExcludeFromSearch", "Codex$IBoundSourceInfo$ExcludeFromSearch"
        ],
        ctors: {
            init: function () {
                this.m_References = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ReferenceSpan).Array;
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSpan)).ctor();
                this.m_Classifications = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ClassificationSpan).Array;
                this.m_OutliningRegions = new (System.Collections.Generic.List$1(Codex.ObjectModel.OutliningRegion)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.BoundSourceInfo, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_ReferenceCount = value.Codex$IBoundSourceInfo$ReferenceCount;
                this.m_DefinitionCount = value.Codex$IBoundSourceInfo$DefinitionCount;
                this.m_Language = value.Codex$IBoundSourceInfo$Language;
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferenceSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$References).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f2));
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$Definitions).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f4));
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$Classifications).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f6));
                this.m_OutliningRegions = new (System.Collections.Generic.List$1(Codex.ObjectModel.OutliningRegion)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$OutliningRegions).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f8));
                this.m_ExcludeFromSearch = value.Codex$IBoundSourceInfo$ExcludeFromSearch;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            },
            CoerceReferenceCount: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : System.Array.getCount(this.References, Codex.ObjectModel.ReferenceSpan));
            },
            CoerceDefinitionCount: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : this.Definitions.Count);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceInfo, {
        f1: function (_v) {
            return new Codex.ObjectModel.ReferenceSpan.ctor().CopyFrom$4(Codex.ObjectModel.ReferenceSpan, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IReferenceSpan, Bridge.global.Codex.ObjectModel.ReferenceSpan, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f1);
        },
        f3: function (_v) {
            return new Codex.ObjectModel.DefinitionSpan.ctor().CopyFrom$1(Codex.ObjectModel.DefinitionSpan, _v);
        },
        f4: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IDefinitionSpan, Bridge.global.Codex.ObjectModel.DefinitionSpan, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f3);
        },
        f5: function (_v) {
            return new Codex.ObjectModel.ClassificationSpan.ctor().CopyFrom$1(Codex.ObjectModel.ClassificationSpan, _v);
        },
        f6: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IClassificationSpan, Bridge.global.Codex.ObjectModel.ClassificationSpan, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f5);
        },
        f7: function (_v) {
            return new Codex.ObjectModel.OutliningRegion.ctor().CopyFrom(Codex.ObjectModel.OutliningRegion, _v);
        },
        f8: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IOutliningRegion, Bridge.global.Codex.ObjectModel.OutliningRegion, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f7);
        }
    });

    /**
     * Describes a commit in version control
     *
     * @public
     * @class Codex.ObjectModel.Commit
     * @augments Codex.ObjectModel.CommitScopeEntity
     * @implements  Codex.ICommit
     */
    Bridge.define("Codex.ObjectModel.Commit", {
        inherits: [Codex.ObjectModel.CommitScopeEntity,Codex.ICommit],
        fields: {
            m_Description: null,
            m_DateUploaded: null,
            m_DateCommitted: null,
            m_ParentCommitIds: null,
            m_ChangedFiles: null
        },
        props: {
            /**
             * The commit description describing the changes
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * The date the commit was stored to the index
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function DateUploaded
             * @type System.DateTime
             */
            DateUploaded: {
                get: function () {
                    return this.m_DateUploaded;
                },
                set: function (value) {
                    this.m_DateUploaded = value;
                }
            },
            /**
             * The date of the commit
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function DateCommitted
             * @type System.DateTime
             */
            DateCommitted: {
                get: function () {
                    return this.m_DateCommitted;
                },
                set: function (value) {
                    this.m_DateCommitted = value;
                }
            },
            /**
             * The {@link } of the parent commits
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.Commit
             * @function Codex$ICommit$ParentCommitIds
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommit$ParentCommitIds: {
                get: function () {
                    return this.ParentCommitIds;
                }
            },
            /**
             * The {@link } of the parent commits
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function ParentCommitIds
             * @type System.Collections.Generic.List$1
             */
            ParentCommitIds: {
                get: function () {
                    return this.m_ParentCommitIds;
                },
                set: function (value) {
                    this.m_ParentCommitIds = value;
                }
            },
            /**
             * The files changed in the commit
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.Commit
             * @function Codex$ICommit$ChangedFiles
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommit$ChangedFiles: {
                get: function () {
                    return this.ChangedFiles;
                }
            },
            /**
             * The files changed in the commit
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function ChangedFiles
             * @type System.Collections.Generic.List$1
             */
            ChangedFiles: {
                get: function () {
                    return this.m_ChangedFiles;
                },
                set: function (value) {
                    this.m_ChangedFiles = value;
                }
            }
        },
        alias: [
            "Description", "Codex$ICommit$Description",
            "DateUploaded", "Codex$ICommit$DateUploaded",
            "DateCommitted", "Codex$ICommit$DateCommitted"
        ],
        ctors: {
            init: function () {
                this.m_DateUploaded = System.DateTime.getDefaultValue();
                this.m_DateCommitted = System.DateTime.getDefaultValue();
                this.m_ParentCommitIds = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.m_ChangedFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitChangedFile)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.Commit, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Description = value.Codex$ICommit$Description;
                this.m_DateUploaded = value.Codex$ICommit$DateUploaded;
                this.m_DateCommitted = value.Codex$ICommit$DateCommitted;
                this.m_ParentCommitIds = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$ICommit$ParentCommitIds);
                this.m_ChangedFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitChangedFile)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommit$ChangedFiles).select($asm.$.Codex.ObjectModel.Commit.f2));
                Codex.ObjectModel.CommitScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.CommitScopeEntity, Bridge.cast((value), Codex.ICommitScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.Commit", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.Commit, {
        f1: function (_v) {
            return new Codex.ObjectModel.CommitChangedFile.ctor().CopyFrom$1(Codex.ObjectModel.CommitChangedFile, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICommitChangedFile, Bridge.global.Codex.ObjectModel.CommitChangedFile, v, $asm.$.Codex.ObjectModel.Commit.f1);
        }
    });

    /**
     * Represents a directory in source control
     *
     * @public
     * @class Codex.ObjectModel.CommitFilesDirectory
     * @augments Codex.ObjectModel.RepoFileScopeEntity
     * @implements  Codex.ICommitFilesDirectory
     */
    Bridge.define("Codex.ObjectModel.CommitFilesDirectory", {
        inherits: [Codex.ObjectModel.RepoFileScopeEntity,Codex.ICommitFilesDirectory],
        fields: {
            m_Files: null
        },
        props: {
            /**
             * The files in the directory
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.CommitFilesDirectory
             * @function Codex$ICommitFilesDirectory$Files
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommitFilesDirectory$Files: {
                get: function () {
                    return this.Files;
                }
            },
            /**
             * The files in the directory
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesDirectory
             * @function Files
             * @type System.Collections.Generic.List$1
             */
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.CommitFilesDirectory, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommitFilesDirectory$Files).select($asm.$.Codex.ObjectModel.CommitFilesDirectory.f2));
                Codex.ObjectModel.RepoFileScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.RepoFileScopeEntity, Bridge.cast((value), Codex.IRepoFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitFilesDirectory", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitFilesDirectory, {
        f1: function (_v) {
            return new Codex.ObjectModel.CommitFileLink.ctor().CopyFrom(Codex.ObjectModel.CommitFileLink, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICommitFileLink, Bridge.global.Codex.ObjectModel.CommitFileLink, v, $asm.$.Codex.ObjectModel.CommitFilesDirectory.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSymbol", {
        inherits: [Codex.ObjectModel.ReferenceSymbol,Codex.IDefinitionSymbol],
        fields: {
            m_Uid: null,
            m_DisplayName: null,
            m_ShortName: null,
            m_ContainerQualifiedName: null,
            m_Modifiers: null,
            m_Glyph: 0,
            m_SymbolDepth: 0,
            m_DocumentationInfo: null,
            m_TypeName: null,
            m_DeclarationName: null,
            m_Comment: null
        },
        props: {
            /**
             * The unique identifier for the symbol
             NOTE: This is not applicable to most symbols. Only set for symbols
             which are added in a shared context and need this for deduplication)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Uid
             * @type string
             */
            Uid: {
                get: function () {
                    return this.m_Uid;
                },
                set: function (value) {
                    this.m_Uid = value;
                }
            },
            /**
             * The display name of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The short name of the symbol (i.e. Task).
             This is used to find the symbol when search term does not contain '.'
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function ShortName
             * @type string
             */
            ShortName: {
                get: function () {
                    return this.CoerceShortName(this.m_ShortName);
                },
                set: function (value) {
                    this.m_ShortName = value;
                }
            },
            /**
             * The qualified name of the symbol (i.e. System.Threading.Tasks.Task).
             This is used to find the symbol when the search term contains '.'
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function ContainerQualifiedName
             * @type string
             */
            ContainerQualifiedName: {
                get: function () {
                    return this.m_ContainerQualifiedName;
                },
                set: function (value) {
                    this.m_ContainerQualifiedName = value;
                }
            },
            /**
             * Modifiers for the symbol such as public
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Modifiers
             * @type Array.<string>
             */
            Modifiers: {
                get: function () {
                    return this.m_Modifiers;
                },
                set: function (value) {
                    this.m_Modifiers = value;
                }
            },
            /**
             * The glyph
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Glyph
             * @type Codex.ObjectModel.Glyph
             */
            Glyph: {
                get: function () {
                    return this.m_Glyph;
                },
                set: function (value) {
                    this.m_Glyph = value;
                }
            },
            /**
             * The depth of the symbol in its symbolic tree
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function SymbolDepth
             * @type number
             */
            SymbolDepth: {
                get: function () {
                    return this.m_SymbolDepth;
                },
                set: function (value) {
                    this.m_SymbolDepth = value;
                }
            },
            /**
             * Documentation for the symbol (if any)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Codex$IDefinitionSymbol$DocumentationInfo
             * @type Codex.IDocumentationInfo
             */
            Codex$IDefinitionSymbol$DocumentationInfo: {
                get: function () {
                    return this.DocumentationInfo;
                }
            },
            /**
             * Documentation for the symbol (if any)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DocumentationInfo
             * @type Codex.ObjectModel.DocumentationInfo
             */
            DocumentationInfo: {
                get: function () {
                    return this.m_DocumentationInfo;
                },
                set: function (value) {
                    this.m_DocumentationInfo = value;
                }
            },
            /**
             * The name of the type for the symbol
             (i.e. return type of method)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function TypeName
             * @type string
             */
            TypeName: {
                get: function () {
                    return this.m_TypeName;
                },
                set: function (value) {
                    this.m_TypeName = value;
                }
            },
            /**
             * The declaration name for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DeclarationName
             * @type string
             */
            DeclarationName: {
                get: function () {
                    return this.m_DeclarationName;
                },
                set: function (value) {
                    this.m_DeclarationName = value;
                }
            },
            /**
             * The comment applied to the definition
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "Uid", "Codex$IDefinitionSymbol$Uid",
            "DisplayName", "Codex$IDefinitionSymbol$DisplayName",
            "ShortName", "Codex$IDefinitionSymbol$ShortName",
            "ContainerQualifiedName", "Codex$IDefinitionSymbol$ContainerQualifiedName",
            "Modifiers", "Codex$IDefinitionSymbol$Modifiers",
            "Glyph", "Codex$IDefinitionSymbol$Glyph",
            "SymbolDepth", "Codex$IDefinitionSymbol$SymbolDepth",
            "TypeName", "Codex$IDefinitionSymbol$TypeName",
            "DeclarationName", "Codex$IDefinitionSymbol$DeclarationName",
            "Comment", "Codex$IDefinitionSymbol$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor2.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Uid = value.Codex$IDefinitionSymbol$Uid;
                this.m_DisplayName = value.Codex$IDefinitionSymbol$DisplayName;
                this.m_ShortName = value.Codex$IDefinitionSymbol$ShortName;
                this.m_ContainerQualifiedName = value.Codex$IDefinitionSymbol$ContainerQualifiedName;
                this.m_Modifiers = value.Codex$IDefinitionSymbol$Modifiers;
                this.m_Glyph = value.Codex$IDefinitionSymbol$Glyph;
                this.m_SymbolDepth = value.Codex$IDefinitionSymbol$SymbolDepth;
                this.m_DocumentationInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DocumentationInfo, Bridge.global.Codex.ObjectModel.DocumentationInfo, this.DocumentationInfo, $asm.$.Codex.ObjectModel.DefinitionSymbol.f1);
                ;
                this.m_TypeName = value.Codex$IDefinitionSymbol$TypeName;
                this.m_DeclarationName = value.Codex$IDefinitionSymbol$DeclarationName;
                this.m_Comment = value.Codex$IDefinitionSymbol$Comment;
                Codex.ObjectModel.ReferenceSymbol.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ReferenceSymbol, Bridge.cast((value), Codex.IReferenceSymbol));
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () {
                this.ReferenceKind = "Definition";
                Codex.ObjectModel.ReferenceSymbol.prototype.Initialize.call(this);
            },
            CoerceShortName: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : "");
            },
            toString: function () {
                return this.DisplayName;
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSymbol", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSymbol, {
        f1: function (v) {
            return new Codex.ObjectModel.DocumentationInfo.ctor().CopyFrom(Codex.ObjectModel.DocumentationInfo, v);
        }
    });

    /**
     * Decribes a symbol related to a given documented symbol
     *
     * @public
     * @class Codex.ObjectModel.DocumentationReferenceSymbol
     * @augments Codex.ObjectModel.ReferenceSymbol
     * @implements  Codex.IDocumentationReferenceSymbol
     */
    Bridge.define("Codex.ObjectModel.DocumentationReferenceSymbol", {
        inherits: [Codex.ObjectModel.ReferenceSymbol,Codex.IDocumentationReferenceSymbol],
        fields: {
            m_DisplayName: null,
            m_Comment: null
        },
        props: {
            /**
             * The display name of the symbol reference as it should appear in documentation
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationReferenceSymbol
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The comment associated with the reference
             (i.e. return type description https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/xmldoc/returns)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationReferenceSymbol
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "DisplayName", "Codex$IDocumentationReferenceSymbol$DisplayName",
            "Comment", "Codex$IDocumentationReferenceSymbol$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor2.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_DisplayName = value.Codex$IDocumentationReferenceSymbol$DisplayName;
                this.m_Comment = value.Codex$IDocumentationReferenceSymbol$Comment;
                Codex.ObjectModel.ReferenceSymbol.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ReferenceSymbol, Bridge.cast((value), Codex.IReferenceSymbol));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * A specialized definition span referring to a parameter of a method/property
     *
     * @public
     * @class Codex.ObjectModel.ParameterDefinitionSpan
     * @augments Codex.ObjectModel.LineSpan
     * @implements  Codex.IParameterDefinitionSpan
     */
    Bridge.define("Codex.ObjectModel.ParameterDefinitionSpan", {
        inherits: [Codex.ObjectModel.LineSpan,Codex.IParameterDefinitionSpan],
        fields: {
            m_ParameterIndex: 0,
            m_Name: null
        },
        props: {
            /**
             * The index of the parameter in the list of parameters for the method
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDefinitionSpan
             * @function ParameterIndex
             * @type number
             */
            ParameterIndex: {
                get: function () {
                    return this.m_ParameterIndex;
                },
                set: function (value) {
                    this.m_ParameterIndex = value;
                }
            },
            /**
             * The name of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDefinitionSpan
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: [
            "ParameterIndex", "Codex$IParameterDefinitionSpan$ParameterIndex",
            "Name", "Codex$IParameterDefinitionSpan$Name"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ParameterDefinitionSpan, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_ParameterIndex = value.Codex$IParameterDefinitionSpan$ParameterIndex;
                this.m_Name = value.Codex$IParameterDefinitionSpan$Name;
                Codex.ObjectModel.LineSpan.prototype.CopyFrom$1.call(this, Codex.ObjectModel.LineSpan, Bridge.cast((value), Codex.ILineSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.TextLineSpan", {
        inherits: [Codex.ObjectModel.LineSpan,Codex.ITextLineSpan],
        fields: {
            m_LineSpanText: null
        },
        props: {
            /**
             * The line text
             TODO: It would be nice to not store this here and instead apply it as a join
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TextLineSpan
             * @function LineSpanText
             * @type string
             */
            LineSpanText: {
                get: function () {
                    return this.m_LineSpanText;
                },
                set: function (value) {
                    this.m_LineSpanText = value;
                }
            }
        },
        alias: ["LineSpanText", "Codex$ITextLineSpan$LineSpanText"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.TextLineSpan, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_LineSpanText = value.Codex$ITextLineSpan$LineSpanText;
                Codex.ObjectModel.LineSpan.prototype.CopyFrom$1.call(this, Codex.ObjectModel.LineSpan, Bridge.cast((value), Codex.ILineSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * NOTE: Do not set {@link }
     *
     * @public
     * @class Codex.ObjectModel.ProjectFileLink
     * @augments Codex.ObjectModel.ProjectFileScopeEntity
     * @implements  Codex.IProjectFileLink
     */
    Bridge.define("Codex.ObjectModel.ProjectFileLink", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.IProjectFileLink],
        fields: {
            m_FileId: null
        },
        props: {
            /**
             * Unique identifier for file
             TODO: Make this checksum and searchable and use for discovering commit from PDB.
             TODO: What is this?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileLink
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            }
        },
        alias: ["FileId", "Codex$IProjectFileLink$FileId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ProjectFileLink, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_FileId = value.Codex$IProjectFileLink$FileId;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IReferenceSearchModel],
        fields: {
            m_Reference: null,
            m_Spans: null,
            m_CompressedSpans: null,
            m_ProjectRelativePath: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The reference symbol
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function Codex$IReferenceSearchModel$Reference
             * @type Codex.ICodeSymbol
             */
            Codex$IReferenceSearchModel$Reference: {
                get: function () {
                    return this.Reference;
                }
            },
            /**
             * The reference symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function Reference
             * @type Codex.ObjectModel.Symbol
             */
            Reference: {
                get: function () {
                    return this.m_Reference;
                },
                set: function (value) {
                    this.m_Reference = value;
                }
            },
            Codex$IReferenceSearchModel$Spans: {
                get: function () {
                    return this.Spans;
                }
            },
            Spans: {
                get: function () {
                    return this.CoerceSpans(this.m_Spans);
                },
                set: function (value) {
                    this.m_Spans = value;
                }
            },
            /**
             * Compressed list of spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function CompressedSpans
             * @type Codex.ISymbolLineSpanList
             */
            CompressedSpans: {
                get: function () {
                    return this.m_CompressedSpans;
                },
                set: function (value) {
                    this.m_CompressedSpans = value;
                }
            },
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "CompressedSpans", "Codex$IReferenceSearchModel$CompressedSpans",
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            init: function () {
                this.m_Spans = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.SymbolSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor6: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$5(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ReferenceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$5: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$4: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$3: function (TTarget, value) {
                this.m_Reference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Symbol, Bridge.global.Codex.ObjectModel.Symbol, this.Reference, $asm.$.Codex.ObjectModel.ReferenceSearchModel.f1);
                ;
                this.m_Spans = new (System.Collections.Generic.List$1(Codex.ObjectModel.SymbolSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferenceSearchModel$Spans).select($asm.$.Codex.ObjectModel.ReferenceSearchModel.f3));
                this.m_CompressedSpans = value.Codex$IReferenceSearchModel$CompressedSpans;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_ProjectRelativePath = Bridge.cast((value), Codex.IProjectFileScopeEntity).Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CoerceSpans: function (value) {
                var $t;
                value = value || (($t = this.CompressedSpans) != null ? $t.Codex$ISymbolLineSpanList$ToList() : null);
                this.Spans = value;
                return value;
            },
            OnSerializingCore: function () {
                var $t;
                if (this.Spans != null) {
                    var lineSpanText = { v : null };
                    $t = Bridge.getEnumerator(this.Spans, Codex.ObjectModel.SymbolSpan);
                    try {
                        while ($t.moveNext()) {
                            var span = $t.Current;
                            span.LineSpanText = Codex.Utilities.SerializationUtilities.RemoveDuplicate(System.String, span.LineSpanText, lineSpanText);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}

                Codex.ObjectModel.SearchEntity.prototype.OnSerializingCore.call(this);
            },
            OnDeserializedCore: function () {
                var $t;
                if (this.Spans != null) {
                    var lineSpanText = { v : null };
                    $t = Bridge.getEnumerator(this.Spans, Codex.ObjectModel.SymbolSpan);
                    try {
                        while ($t.moveNext()) {
                            var span = $t.Current;
                            span.LineSpanText = Codex.Utilities.SerializationUtilities.AssignDuplicate(System.String, span.LineSpanText, lineSpanText);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}

                Codex.ObjectModel.SearchEntity.prototype.OnDeserializedCore.call(this);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferenceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferenceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.Symbol.ctor().CopyFrom(Codex.ObjectModel.Symbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.SymbolSpan.ctor().CopyFrom$3(Codex.ObjectModel.SymbolSpan, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ISymbolSpan, Bridge.global.Codex.ObjectModel.SymbolSpan, v, $asm.$.Codex.ObjectModel.ReferenceSearchModel.f2);
        }
    });

    Bridge.define("Codex.ObjectModel.SourceFileInfo", {
        inherits: [Codex.EntityBase,Codex.ISourceFileInfo],
        fields: {
            m_Lines: 0,
            m_Size: 0,
            m_Language: null,
            m_WebAddress: null,
            m_Encoding: null,
            m_Properties: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_SourceControlContentId: null,
            m_ProjectRelativePath: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The number of lines in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Lines
             * @type number
             */
            Lines: {
                get: function () {
                    return this.m_Lines;
                },
                set: function (value) {
                    this.m_Lines = value;
                }
            },
            /**
             * The size of the file in bytes
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Size
             * @type number
             */
            Size: {
                get: function () {
                    return this.m_Size;
                },
                set: function (value) {
                    this.m_Size = value;
                }
            },
            /**
             * The language of the file
             TODO: Remove
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Language
             * @type string
             */
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            },
            /**
             * The web address of the file. TODO: Remove? Is repo relative path enough?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function WebAddress
             * @type string
             */
            WebAddress: {
                get: function () {
                    return this.m_WebAddress;
                },
                set: function (value) {
                    this.m_WebAddress = value;
                }
            },
            /**
             * The encoding used for the file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Codex$ISourceFileInfo$Encoding
             * @type Codex.IEncodingDescription
             */
            Codex$ISourceFileInfo$Encoding: {
                get: function () {
                    return this.Encoding;
                }
            },
            /**
             * The encoding used for the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Encoding
             * @type Codex.ObjectModel.EncodingDescription
             */
            Encoding: {
                get: function () {
                    return this.m_Encoding;
                },
                set: function (value) {
                    this.m_Encoding = value;
                }
            },
            /**
             * Extensible key value properties for the document.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Codex$ISourceFileInfo$Properties
             * @type Codex.IPropertyMap
             */
            Codex$ISourceFileInfo$Properties: {
                get: function () {
                    return this.Properties;
                }
            },
            /**
             * Extensible key value properties for the document.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Properties
             * @type Codex.ObjectModel.PropertyMap
             */
            Properties: {
                get: function () {
                    return this.m_Properties;
                },
                set: function (value) {
                    this.m_Properties = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * Unique id for the source file content as defined by the source control provider (i.e. git SHA)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function SourceControlContentId
             * @type string
             */
            SourceControlContentId: {
                get: function () {
                    return this.m_SourceControlContentId;
                },
                set: function (value) {
                    this.m_SourceControlContentId = value;
                }
            },
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "Lines", "Codex$ISourceFileInfo$Lines",
            "Size", "Codex$ISourceFileInfo$Size",
            "Language", "Codex$ISourceFileInfo$Language",
            "WebAddress", "Codex$ISourceFileInfo$WebAddress",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "SourceControlContentId", "Codex$ISourceControlFileInfo$SourceControlContentId",
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor6: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$5(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$2(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$3(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$4(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$1(Codex.ObjectModel.SourceFileInfo, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$4: function (TTarget, value) {
                this.m_SourceControlContentId = value.Codex$ISourceControlFileInfo$SourceControlContentId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$5: function (TTarget, value) {
                this.m_Lines = value.Codex$ISourceFileInfo$Lines;
                this.m_Size = value.Codex$ISourceFileInfo$Size;
                this.m_Language = value.Codex$ISourceFileInfo$Language;
                this.m_WebAddress = value.Codex$ISourceFileInfo$WebAddress;
                this.m_Encoding = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.EncodingDescription, Bridge.global.Codex.ObjectModel.EncodingDescription, this.Encoding, $asm.$.Codex.ObjectModel.SourceFileInfo.f1);
                ;
                this.m_Properties = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.PropertyMap, Bridge.global.Codex.ObjectModel.PropertyMap, this.Properties, $asm.$.Codex.ObjectModel.SourceFileInfo.f2);
                ;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_SourceControlContentId = Bridge.cast((value), Codex.ISourceControlFileInfo).Codex$ISourceControlFileInfo$SourceControlContentId;
                this.m_ProjectRelativePath = Bridge.cast((value), Codex.IProjectFileScopeEntity).Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SourceFileInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SourceFileInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.EncodingDescription.ctor().CopyFrom(Codex.ObjectModel.EncodingDescription, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.PropertyMap.ctor().CopyFrom(Codex.ObjectModel.PropertyMap, v);
        }
    });

    Bridge.define("Codex.ObjectModel.TextLineSpanResult", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.Sdk.Search.ITextLineSpanResult],
        fields: {
            m_TextSpan: null
        },
        props: {
            Codex$Sdk$Search$ITextLineSpanResult$TextSpan: {
                get: function () {
                    return this.TextSpan;
                }
            },
            TextSpan: {
                get: function () {
                    return this.m_TextSpan;
                },
                set: function (value) {
                    this.m_TextSpan = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.TextLineSpanResult, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_TextSpan = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.TextLineSpan, Bridge.global.Codex.ObjectModel.TextLineSpan, this.TextSpan, $asm.$.Codex.ObjectModel.TextLineSpanResult.f1);
                ;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.TextLineSpanResult", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.TextLineSpanResult, {
        f1: function (v) {
            return new Codex.ObjectModel.TextLineSpan.ctor().CopyFrom$2(Codex.ObjectModel.TextLineSpan, v);
        }
    });

    /**
     * Represents a source file with associated semantic bindings
     *
     * @public
     * @class Codex.ObjectModel.BoundSourceFile
     * @augments Codex.ObjectModel.BoundSourceInfo
     * @implements  Codex.IBoundSourceFile
     */
    Bridge.define("Codex.ObjectModel.BoundSourceFile", {
        inherits: [Codex.ObjectModel.BoundSourceInfo,Codex.IBoundSourceFile],
        fields: {
            m_SourceFile: null
        },
        props: {
            /**
             * The source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceFile
             * @function Codex$IBoundSourceFile$SourceFile
             * @type Codex.ISourceFile
             */
            Codex$IBoundSourceFile$SourceFile: {
                get: function () {
                    return this.SourceFile;
                }
            },
            /**
             * The source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceFile
             * @function SourceFile
             * @type Codex.ObjectModel.SourceFile
             */
            SourceFile: {
                get: function () {
                    return this.m_SourceFile;
                },
                set: function (value) {
                    this.m_SourceFile = value;
                }
            }
        },
        alias: [
            "References", "Codex$IBoundSourceInfo$References",
            "Definitions", "Codex$IBoundSourceInfo$Definitions",
            "Classifications", "Codex$IBoundSourceInfo$Classifications",
            "OutliningRegions", "Codex$IBoundSourceInfo$OutliningRegions"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.ctor.call(this);
                this.CopyFrom$5(Codex.ObjectModel.BoundSourceFile, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$5: function (TTarget, value) {
                this.m_SourceFile = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFile, Bridge.global.Codex.ObjectModel.SourceFile, this.SourceFile, $asm.$.Codex.ObjectModel.BoundSourceFile.f1);
                ;
                Codex.ObjectModel.BoundSourceInfo.prototype.CopyFrom$4.call(this, Codex.ObjectModel.BoundSourceInfo, Bridge.cast((value), Codex.IBoundSourceInfo));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceFile", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceFile, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceFile.ctor().CopyFrom(Codex.ObjectModel.SourceFile, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SymbolSpan", {
        inherits: [Codex.ObjectModel.TextLineSpan,Codex.ISymbolSpan],
        props: {
            LineSpanEnd: {
                get: function () {
                    return ((this.LineSpanStart + this.Length) | 0);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.SymbolSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor3.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                Codex.ObjectModel.TextLineSpan.prototype.CopyFrom$2.call(this, Codex.ObjectModel.TextLineSpan, Bridge.cast((value), Codex.ITextLineSpan));
                return Bridge.cast((this), TTarget);
            },
            Trim: function () {
                var initialLength = this.LineSpanText.length;
                this.LineSpanText = System.String.trimStart(this.LineSpanText);
                var newLength = this.LineSpanText.length;
                this.LineSpanStart = (this.LineSpanStart - (((initialLength - newLength) | 0))) | 0;
                this.LineSpanText = System.String.trimEnd(this.LineSpanText);
                this.LineSpanStart = Math.max(this.LineSpanStart, 0);
                this.Length = Math.min(this.LineSpanText.length, this.Length);
            },
            CreateReference: function (referenceSymbol, relatedDefinition) {
                var $t;
                if (relatedDefinition === void 0) { relatedDefinition = new Codex.ObjectModel.SymbolId(); }
                return ($t = new Codex.ObjectModel.ReferenceSpan.$ctor4(this), $t.RelatedDefinition = relatedDefinition, $t.Reference = referenceSymbol, $t);
            },
            CreateDefinition: function (definition) {
                var $t;
                return ($t = new Codex.ObjectModel.DefinitionSpan.$ctor2(this), $t.Definition = definition, $t);
            }
        }
    });

    /**
     * A specialized reference span referring to a parameter to a method/property
     *
     * @public
     * @class Codex.ObjectModel.ParameterReferenceSpan
     * @augments Codex.ObjectModel.SymbolSpan
     * @implements  Codex.IParameterReferenceSpan
     */
    Bridge.define("Codex.ObjectModel.ParameterReferenceSpan", {
        inherits: [Codex.ObjectModel.SymbolSpan,Codex.IParameterReferenceSpan],
        fields: {
            m_ParameterIndex: 0
        },
        props: {
            /**
             * The index of the parameter in the list of parameters for the method
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterReferenceSpan
             * @function ParameterIndex
             * @type number
             */
            ParameterIndex: {
                get: function () {
                    return this.m_ParameterIndex;
                },
                set: function (value) {
                    this.m_ParameterIndex = value;
                }
            }
        },
        alias: ["ParameterIndex", "Codex$IParameterReferenceSpan$ParameterIndex"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ParameterReferenceSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor3.call(this, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor4.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_ParameterIndex = value.Codex$IParameterReferenceSpan$ParameterIndex;
                Codex.ObjectModel.SymbolSpan.prototype.CopyFrom$3.call(this, Codex.ObjectModel.SymbolSpan, Bridge.cast((value), Codex.ISymbolSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSpan", {
        inherits: [Codex.ObjectModel.SymbolSpan,Codex.IReferenceSpan],
        fields: {
            m_RelatedDefinition: null,
            m_Reference: null,
            m_Parameters: null
        },
        props: {
            /**
             * Gets the symbol id of the definition which provides this reference
             (i.e. method definition for interface implementation)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function RelatedDefinition
             * @type Codex.ObjectModel.SymbolId
             */
            RelatedDefinition: {
                get: function () {
                    return this.m_RelatedDefinition;
                },
                set: function (value) {
                    this.m_RelatedDefinition = value;
                }
            },
            /**
             * The reference symbol referred to by the span
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Codex$IReferenceSpan$Reference
             * @type Codex.IReferenceSymbol
             */
            Codex$IReferenceSpan$Reference: {
                get: function () {
                    return this.Reference;
                }
            },
            /**
             * The reference symbol referred to by the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Reference
             * @type Codex.ObjectModel.ReferenceSymbol
             */
            Reference: {
                get: function () {
                    return this.m_Reference;
                },
                set: function (value) {
                    this.m_Reference = value;
                }
            },
            /**
             * Gets the references to parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Codex$IReferenceSpan$Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IReferenceSpan$Parameters: {
                get: function () {
                    return this.Parameters;
                }
            },
            /**
             * Gets the references to parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Parameters: {
                get: function () {
                    return this.m_Parameters;
                },
                set: function (value) {
                    this.m_Parameters = value;
                }
            }
        },
        alias: ["RelatedDefinition", "Codex$IReferenceSpan$RelatedDefinition"],
        ctors: {
            init: function () {
                this.m_RelatedDefinition = new Codex.ObjectModel.SymbolId();
                this.m_Parameters = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ParameterReferenceSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ReferenceSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor3.call(this, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor4.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_RelatedDefinition = value.Codex$IReferenceSpan$RelatedDefinition;
                this.m_Reference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.ReferenceSymbol, Bridge.global.Codex.ObjectModel.ReferenceSymbol, this.Reference, $asm.$.Codex.ObjectModel.ReferenceSpan.f1);
                ;
                this.m_Parameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterReferenceSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferenceSpan$Parameters).select($asm.$.Codex.ObjectModel.ReferenceSpan.f3));
                Codex.ObjectModel.SymbolSpan.prototype.CopyFrom$3.call(this, Codex.ObjectModel.SymbolSpan, Bridge.cast((value), Codex.ISymbolSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferenceSpan", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferenceSpan, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferenceSymbol.ctor().CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.ParameterReferenceSpan.ctor().CopyFrom$4(Codex.ObjectModel.ParameterReferenceSpan, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IParameterReferenceSpan, Bridge.global.Codex.ObjectModel.ParameterReferenceSpan, v, $asm.$.Codex.ObjectModel.ReferenceSpan.f2);
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDb2RleC5WaWV3LldlYi5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiLi4vLi4vQ29kZXguU2RrLlR5cGVzL1N1cHBvcnQvQXR0cmlidXRlcy5jcyIsIi4uLy4uL0NvZGV4LlNkay5UeXBlcy9TdXBwb3J0L0RhdGFJbmNsdXNpb24uY3MiLCIuLi8uLi9Db2RleC5TZGsuVHlwZXMvRW50aXR5VXRpbGl0aWVzLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9FbnRpdHlUeXBlcy5nLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9HbHlwaC5jcyIsIkNvbXBhdGliaWxpdHkvQ29tcGF0aWJpbGl0eS5jcyIsIi4uLy4uL0NvZGV4LlNkay5UeXBlcy9BcGkvSUluZGV4LmNzIiwiLi4vLi4vQ29kZXguU2RrLlR5cGVzL0FwaS9JQ29kZXguY3MiLCIuLi8uLi9Db2RleC5TZGsuVHlwZXMvU3VwcG9ydC9TZWFyY2hUeXBlRGVzY3JpcHRvcnMuY3MiLCIuLi8uLi9Db2RleC5TZGsuVHlwZXMvU2VhcmNoVHlwZXMuY3MiLCIuLi9Db2RleC5TZGsuU2hhcmVkL1V0aWxpdGllcy9Db2xsZWN0aW9uVXRpbGl0aWVzLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9VdGlsaXRpZXMvU2VyaWFsaXphdGlvblV0aWxpdGllcy5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL0FwcC5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL1ZpZXdNb2RlbHMuY3MiLCIuLi9Db2RleC5WaWV3LlNoYXJlZC9HcmFudWxhckV4dGVuc2lvbnMuY3MiLCIuLi9Db2RleC5WaWV3LlNoYXJlZC9MZWZ0UGFuZVZpZXcueGFtbC5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL01haW5XaW5kb3cueGFtbC5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL1N0eWxlcy5jcyIsIi4uLy4uL0NvZGV4LlNkay5UeXBlcy9FbnRpdHlCYXNlLmNzIiwiV2ViQXBpQ29kZXguY3MiXSwKICAi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QUNMQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQTs0QkFDSUEsTUFBTUEsSUFBSUE7OztnREFJZ0NBO29CQUVsREEsUUFBUUE7d0JBRUpBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEs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O2dCQUN6REEsMkZBQTBCQSxBQUFDQSxZQUFtQkEsQ0FBQ0E7Z0JBQy9DQSxPQUFPQSxBQUFDQSxZQUFTQSxDQUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkExR2RBLE9BQU9BOzs7b0JBR1BBLDJCQUEyQkE7Ozs7Ozs7Ozs7Ozs7O29CQVMzQkEsT0FBT0E7Ozs7Ozs7Ozs7Ozs7O29CQVNQQSxPQUFPQTs7O29CQUdQQSxtQkFBbUJBOzs7Ozs7Ozs7Ozs7OztvQkFTbkJBLE9BQU9BOzs7Ozs7Ozs7Ozs7OztvQkFTUEEsT0FBT0E7OztvQkFHUEEsb0JBQW9CQTs7Ozs7Ozs7b0NBNUU0REE7Ozs7Ozs4QkFLbkVBOzs7Z0JBQ2pCQSxpREFBNkJBOzs4QkFHWkE7OytEQUNSQTs7OEJBR1FBOzsrREFDUkE7OzhCQUdRQTs7K0RBQ1JBOzs4QkFHUUE7OytEQUNSQTs7OztrQ0EwRG1CQSxTQUFTQTtnQkFFckNBLDJCQUEyQkEsQUFBQ0EsQUFBc0JBLEFBQUNBO2dCQUNuREEsbUJBQW1CQSxtSUFBZ0hBLGdCQUFXQSxBQUE0R0E7Z0JBQTBEQTtnQkFDcFRBLG9CQUFvQkEsS0FBSUEsb0ZBQXdEQSw0QkFBc0hBLEFBQUNBLEFBQXNCQSxBQUFDQSw4Q0FBb0JBLEFBQStHQTtnQkFDaldBLDJGQUEwQkEsQUFBQ0EsWUFBbUJBLENBQUNBO2dCQUMvQ0EsT0FBT0EsQUFBQ0EsWUFBU0EsQ0FBQ0E7Ozs7Ozs7OzttQkFINk9BLElBQUlBLHVGQUE0Q0E7OzttQkFDa1NBLElBQUlBLHFHQUEwREE7OzttQkFBelNBLHNJQUFtSEEsR0FBR0EsQUFBK0dBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleFxyXG57XHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFNlYXJjaERlc2NyaXB0b3JJbmxpbmVBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYm9vbCBJbmxpbmU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hEZXNjcmlwdG9ySW5saW5lQXR0cmlidXRlKGJvb2wgaW5saW5lID0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbmxpbmUgPSBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgRW50aXR5SWRBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5DbGFzcywgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFBsYWNlaG9sZGVyQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuQ2xhc3MsIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBTZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IFR5cGUgVHlwZTtcclxuXHJcbiAgICAgICAgcHVibGljIFNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUoVHlwZSB0eXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVHlwZSA9IHR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLkludGVyZmFjZSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIEFkYXB0ZXJUeXBlQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuSW50ZXJmYWNlLCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgR2VuZXJhdGVkQ2xhc3NOYW1lQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHN0cmluZyBOYW1lO1xyXG5cclxuICAgICAgICBwdWJsaWMgR2VuZXJhdGVkQ2xhc3NOYW1lQXR0cmlidXRlKHN0cmluZyBuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbmRpY2F0ZXMgYW4gYXR0YWNoZWQgcHJvcGVydHkgd2hpY2ggaXMgbm90IGludHJpbnNpYyB0byB0aGUgcGFyZW50IG9iamVjdCBhbmQgc2hvdWxkIGJlXHJcbiAgICAvLy8gZXhjbHVkZWQgd2hlbiBjb21wdXRpbmcgdGhlIDxzZWUgY3JlZj1cIklTZWFyY2hFbnRpdHkuRW50aXR5Q29udGVudElkXCIvPlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgQXR0YWNoZWRBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFF1ZXJ5QXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBSZWFkT25seUxpc3RBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIENvZXJjZUdldEF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBUeXBlIENvZXJjZWRTb3VyY2VUeXBlO1xyXG5cclxuICAgICAgICBwdWJsaWMgQ29lcmNlR2V0QXR0cmlidXRlKFR5cGUgY29lcmNlZFNvdXJjZVR5cGUgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29lcmNlZFNvdXJjZVR5cGUgPSBjb2VyY2VkU291cmNlVHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluZGljYXRlcyBzdGFnZXMgZm9yIHdoaWNoIHRoZSBnaXZlbiBwcm9wZXJ0eSBzaG91bGQgYmUgaW5jbHVkZWRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIEluY2x1ZGVBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgT2JqZWN0U3RhZ2UgQWxsb3dlZFN0YWdlcztcclxuXHJcbiAgICAgICAgcHVibGljIEluY2x1ZGVBdHRyaWJ1dGUoT2JqZWN0U3RhZ2Ugc3RhZ2VzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWxsb3dlZFN0YWdlcyA9IHN0YWdlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHkgfCBBdHRyaWJ1dGVUYXJnZXRzLkludGVyZmFjZSB8IEF0dHJpYnV0ZVRhcmdldHMuQ2xhc3MsIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBSZXF1aXJlZEZvckF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBPYmplY3RTdGFnZSBTdGFnZXM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBSZXF1aXJlZEZvckF0dHJpYnV0ZShPYmplY3RTdGFnZSBzdGFnZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTdGFnZXMgPSBzdGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtIE9iamVjdFN0YWdlXHJcbiAgICB7XHJcbiAgICAgICAgTm9uZSA9IDAsXHJcbiAgICAgICAgQW5hbHlzaXMgPSAxLFxyXG4gICAgICAgIEluZGV4ID0gMSA8PCAxLFxyXG4gICAgICAgIFNlYXJjaCA9IDEgPDwgMixcclxuICAgICAgICBBbGwgPSBTZWFyY2ggfCBJbmRleCB8IEFuYWx5c2lzXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudW0gU2VhcmNoQmVoYXZpb3JcclxuICAgIHtcclxuICAgICAgICBOb25lLFxyXG4gICAgICAgIFRlcm0sXHJcbiAgICAgICAgTm9ybWFsaXplZEtleXdvcmQsXHJcbiAgICAgICAgU29ydHdvcmQsXHJcbiAgICAgICAgSGllcmFyY2hpY2FsUGF0aCxcclxuICAgICAgICBGdWxsVGV4dCxcclxuICAgICAgICBQcmVmaXgsXHJcbiAgICAgICAgUHJlZml4RnVsbE5hbWVcclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFNlYXJjaEJlaGF2aW9yQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IFNlYXJjaEJlaGF2aW9yIEJlaGF2aW9yO1xyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoQmVoYXZpb3JBdHRyaWJ1dGUoU2VhcmNoQmVoYXZpb3IgYmVoYXZpb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBCZWhhdmlvciA9IGJlaGF2aW9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxuXHJcbm5hbWVzcGFjZSBDb2RleFxyXG57XHJcbiAgICBwdWJsaWMgZW51bSBEYXRhSW5jbHVzaW9uT3B0aW9uc1xuICAgIHtcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEYXRhIHNob3VsZCBhbHdheXMgYmUgaW5jbHVkZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxuICAgICAgICBOb25lID0gMCxcbiAgICAgICAgRGVmaW5pdGlvbnMgPSAxLFxuICAgICAgICBSZWZlcmVuY2VzID0gMSA8PCAxLFxuICAgICAgICBDbGFzc2lmaWNhdGlvbnMgPSAxIDw8IDIsXG4gICAgICAgIFNlYXJjaERlZmluaXRpb25zID0gMSA8PCAzLFxuICAgICAgICBTZWFyY2hSZWZlcmVuY2VzID0gMSA8PCA0LFxuICAgICAgICBDb250ZW50ID0gMSA8PCA1LFxuICAgICAgICBBbGwgPSBEZWZpbml0aW9ucyB8IFJlZmVyZW5jZXMgfCBDbGFzc2lmaWNhdGlvbnMgfCBTZWFyY2hEZWZpbml0aW9ucyB8IFNlYXJjaFJlZmVyZW5jZXMgfCBDb250ZW50LFxuXG4gICAgICAgIC8vIERlZmF1bHQgZG9lcyBub3QgaW5jbHVkZSBkZWZpbml0aW9ucyBzaW5jZSB0aGV5IGNhbiBiZSBxdWVyaWVkIGxhemlseSByYXRoZXIgdGhhbiBlYWdlcmx5IHJldHJpZXZlZC5cbiAgICAgICAgRGVmYXVsdCA9IFJlZmVyZW5jZXMgfCBDbGFzc2lmaWNhdGlvbnMgfCBTZWFyY2hEZWZpbml0aW9ucyB8IFNlYXJjaFJlZmVyZW5jZXMgfCBDb250ZW50XG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgRGF0YUluY2x1c2lvbkF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBEYXRhSW5jbHVzaW9uT3B0aW9ucyBEYXRhSW5jbHVzaW9uO1xyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUluY2x1c2lvbkF0dHJpYnV0ZShEYXRhSW5jbHVzaW9uT3B0aW9ucyBkYXRhSW5jbHVzaW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRGF0YUluY2x1c2lvbiA9IGRhdGFJbmNsdXNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIEVudGl0eVV0aWxpdGllc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVFRhcmdldCBOdWxsT3JDb3B5PFQsIFRUYXJnZXQ+KFQgb2JqLCBGdW5jPFQsIFRUYXJnZXQ+IGNvcHkpXHJcbiAgICAgICAgICAgIHdoZXJlIFQgOiBjbGFzc1xyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogY2xhc3MsIFRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3B5KG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGF1dG8tZ2VuZXJhdGVkPlxyXG4vLyAgICAgVGhpcyBjb2RlIHdhcyBnZW5lcmF0ZWQgYnkgYSB0b29sLlxyXG4vLyAgICAgUnVudGltZSBWZXJzaW9uOjQuMC4zMDMxOS40MjAwMFxyXG4vL1xyXG4vLyAgICAgQ2hhbmdlcyB0byB0aGlzIGZpbGUgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvciBhbmQgd2lsbCBiZSBsb3N0IGlmXHJcbi8vICAgICB0aGUgY29kZSBpcyByZWdlbmVyYXRlZC5cclxuLy8gPC9hdXRvLWdlbmVyYXRlZD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbm5hbWVzcGFjZSBDb2RleC5PYmplY3RNb2RlbCB7XHJcbiAgICB1c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG4gICAgdXNpbmcgQ29kZXguRnJhbWV3b3JrLlR5cGVzO1xyXG4gICAgXHJcbiAgICBcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvZGV4VHlwZVV0aWxpdGllcyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5RGljdGlvbmFyeTxTeXN0ZW0uVHlwZSwgU3lzdGVtLlR5cGU+IHNfdHlwZU1hcHBpbmdzID0gQ3JlYXRlVHlwZU1hcHBpbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5EaWN0aW9uYXJ5PFN5c3RlbS5UeXBlLCBTeXN0ZW0uVHlwZT4gQ3JlYXRlVHlwZU1hcHBpbmcoKSB7XHJcbiAgICAgICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkRpY3Rpb25hcnk8U3lzdGVtLlR5cGUsIFN5c3RlbS5UeXBlPiB0eXBlTWFwcGluZyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5EaWN0aW9uYXJ5PFN5c3RlbS5UeXBlLCBTeXN0ZW0uVHlwZT4oKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0KSwgdHlwZW9mKENvbW1pdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvbW1pdCksIHR5cGVvZihDb2RleC5JQ29tbWl0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdENoYW5nZWRGaWxlKSwgdHlwZW9mKENvbW1pdENoYW5nZWRGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0Q2hhbmdlZEZpbGUpLCB0eXBlb2YoQ29kZXguSUNvbW1pdENoYW5nZWRGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSwgdHlwZW9mKENvbW1pdEZpbGVMaW5rKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0RmlsZUxpbmspLCB0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUJyYW5jaCksIHR5cGVvZihCcmFuY2gpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihCcmFuY2gpLCB0eXBlb2YoQ29kZXguSUJyYW5jaCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZUZpbGUpLCB0eXBlb2YoQm91bmRTb3VyY2VGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQm91bmRTb3VyY2VGaWxlKSwgdHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZUZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VJbmZvKSwgdHlwZW9mKEJvdW5kU291cmNlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEJvdW5kU291cmNlSW5mbyksIHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyksIHR5cGVvZihTb3VyY2VDb250cm9sRmlsZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTb3VyY2VDb250cm9sRmlsZUluZm8pLCB0eXBlb2YoQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTb3VyY2VGaWxlSW5mbyksIHR5cGVvZihTb3VyY2VGaWxlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFNvdXJjZUZpbGVJbmZvKSwgdHlwZW9mKENvZGV4LklTb3VyY2VGaWxlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uKSwgdHlwZW9mKEVuY29kaW5nRGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihFbmNvZGluZ0Rlc2NyaXB0aW9uKSwgdHlwZW9mKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVNvdXJjZUZpbGUpLCB0eXBlb2YoU291cmNlRmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFNvdXJjZUZpbGUpLCB0eXBlb2YoQ29kZXguSVNvdXJjZUZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JT3V0bGluaW5nUmVnaW9uKSwgdHlwZW9mKE91dGxpbmluZ1JlZ2lvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKE91dGxpbmluZ1JlZ2lvbiksIHR5cGVvZihDb2RleC5JT3V0bGluaW5nUmVnaW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSURlZmluaXRpb25TcGFuKSwgdHlwZW9mKERlZmluaXRpb25TcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoRGVmaW5pdGlvblNwYW4pLCB0eXBlb2YoQ29kZXguSURlZmluaXRpb25TcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuKSwgdHlwZW9mKFBhcmFtZXRlckRlZmluaXRpb25TcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4pLCB0eXBlb2YoQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVNwYW4pLCB0eXBlb2YoUmVmZXJlbmNlU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlZmVyZW5jZVNwYW4pLCB0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiksIHR5cGVvZihQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiksIHR5cGVvZihDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4pLCB0eXBlb2YoQ2xhc3NpZmljYXRpb25TcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ2xhc3NpZmljYXRpb25TcGFuKSwgdHlwZW9mKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU3ltYm9sU3BhbiksIHR5cGVvZihTeW1ib2xTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU3ltYm9sU3BhbiksIHR5cGVvZihDb2RleC5JU3ltYm9sU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklUZXh0TGluZVNwYW4pLCB0eXBlb2YoVGV4dExpbmVTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoVGV4dExpbmVTcGFuKSwgdHlwZW9mKENvZGV4LklUZXh0TGluZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JTGluZVNwYW4pLCB0eXBlb2YoTGluZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihMaW5lU3BhbiksIHR5cGVvZihDb2RleC5JTGluZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU3BhbiksIHR5cGVvZihTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU3BhbiksIHR5cGVvZihDb2RleC5JU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3KSwgdHlwZW9mKENvZGVSZXZpZXcpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RlUmV2aWV3KSwgdHlwZW9mKENvZGV4LklDb2RlUmV2aWV3KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24pLCB0eXBlb2YoQ29kZVJldmlld0l0ZXJhdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGVSZXZpZXdJdGVyYXRpb24pLCB0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29kZVJldmlld2VySW5mbyksIHR5cGVvZihDb2RlUmV2aWV3ZXJJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZVJldmlld2VySW5mbyksIHR5cGVvZihDb2RleC5JQ29kZVJldmlld2VySW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3RmlsZSksIHR5cGVvZihDb2RlUmV2aWV3RmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGVSZXZpZXdGaWxlKSwgdHlwZW9mKENvZGV4LklDb2RlUmV2aWV3RmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCksIHR5cGVvZihDb2RlUmV2aWV3Q29tbWVudFRocmVhZCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGVSZXZpZXdDb21tZW50VGhyZWFkKSwgdHlwZW9mKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCksIHR5cGVvZihDb2RlUmV2aWV3Q29tbWVudCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGVSZXZpZXdDb21tZW50KSwgdHlwZW9mKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklMYW5ndWFnZUluZm8pLCB0eXBlb2YoTGFuZ3VhZ2VJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoTGFuZ3VhZ2VJbmZvKSwgdHlwZW9mKENvZGV4LklMYW5ndWFnZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSksIHR5cGVvZihDbGFzc2lmaWNhdGlvblN0eWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ2xhc3NpZmljYXRpb25TdHlsZSksIHR5cGVvZihDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9qZWN0KSwgdHlwZW9mKEFuYWx5emVkUHJvamVjdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEFuYWx5emVkUHJvamVjdCksIHR5cGVvZihDb2RleC5JUHJvamVjdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCksIHR5cGVvZihSZWZlcmVuY2VkUHJvamVjdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlZmVyZW5jZWRQcm9qZWN0KSwgdHlwZW9mKENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9qZWN0RmlsZUxpbmspLCB0eXBlb2YoUHJvamVjdEZpbGVMaW5rKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUHJvamVjdEZpbGVMaW5rKSwgdHlwZW9mKENvZGV4LklQcm9qZWN0RmlsZUxpbmspKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pLCB0eXBlb2YoRG9jdW1lbnRhdGlvbkluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihEb2N1bWVudGF0aW9uSW5mbyksIHR5cGVvZihDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiksIHR5cGVvZihQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiksIHR5cGVvZihDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24pLCB0eXBlb2YoVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSwgdHlwZW9mKENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCksIHR5cGVvZihEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCksIHR5cGVvZihDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsKSwgdHlwZW9mKFByb3BlcnR5U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQcm9wZXJ0eVNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb3BlcnR5TWFwKSwgdHlwZW9mKFByb3BlcnR5TWFwKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUHJvcGVydHlNYXApLCB0eXBlb2YoQ29kZXguSVByb3BlcnR5TWFwKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnkpLCB0eXBlb2YoUmVwb3NpdG9yeSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlcG9zaXRvcnkpLCB0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSksIHR5cGVvZihSZXBvc2l0b3J5UmVmZXJlbmNlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVwb3NpdG9yeVJlZmVyZW5jZSksIHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTZWFyY2hFbnRpdHkpLCB0eXBlb2YoU2VhcmNoRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU2VhcmNoRW50aXR5KSwgdHlwZW9mKENvZGV4LklTZWFyY2hFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVwb1Njb3BlRW50aXR5KSwgdHlwZW9mKFJlcG9TY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlcG9TY29wZUVudGl0eSksIHR5cGVvZihDb2RleC5JUmVwb1Njb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5KSwgdHlwZW9mKENvbW1pdFNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0U2NvcGVFbnRpdHkpLCB0eXBlb2YoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSksIHR5cGVvZihQcm9qZWN0U2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQcm9qZWN0U2NvcGVFbnRpdHkpLCB0eXBlb2YoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSwgdHlwZW9mKFJlcG9GaWxlU2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZXBvRmlsZVNjb3BlRW50aXR5KSwgdHlwZW9mKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpLCB0eXBlb2YoUHJvamVjdEZpbGVTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFByb2plY3RGaWxlU2NvcGVFbnRpdHkpLCB0eXBlb2YoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVnaXN0ZXJlZEVudGl0eSksIHR5cGVvZihSZWdpc3RlcmVkRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVnaXN0ZXJlZEVudGl0eSksIHR5cGVvZihDb2RleC5JUmVnaXN0ZXJlZEVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTdG9yZWRGaWx0ZXIpLCB0eXBlb2YoU3RvcmVkRmlsdGVyKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU3RvcmVkRmlsdGVyKSwgdHlwZW9mKENvZGV4LklTdG9yZWRGaWx0ZXIpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsKSwgdHlwZW9mKERlZmluaXRpb25TZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKERlZmluaXRpb25TZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUxhbmd1YWdlU2VhcmNoTW9kZWwpLCB0eXBlb2YoTGFuZ3VhZ2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKExhbmd1YWdlU2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSUxhbmd1YWdlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoUmVmZXJlbmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZWZlcmVuY2VTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlKSwgdHlwZW9mKFNvdXJjZVNlYXJjaE1vZGVsQmFzZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFNvdXJjZVNlYXJjaE1vZGVsQmFzZSksIHR5cGVvZihDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoQm91bmRTb3VyY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEJvdW5kU291cmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JVGV4dFNvdXJjZVNlYXJjaE1vZGVsKSwgdHlwZW9mKFRleHRTb3VyY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFRleHRTb3VyY2VTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JVGV4dFNvdXJjZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCksIHR5cGVvZihSZXBvc2l0b3J5U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZXBvc2l0b3J5U2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9qZWN0U2VhcmNoTW9kZWwpLCB0eXBlb2YoUHJvamVjdFNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUHJvamVjdFNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklQcm9qZWN0U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKSwgdHlwZW9mKFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsKSwgdHlwZW9mKENvbW1pdFNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0U2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvbW1pdEZpbGVzU2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRmlsZVN0YXRpc3RpY3MpLCB0eXBlb2YoRmlsZVN0YXRpc3RpY3MpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihGaWxlU3RhdGlzdGljcyksIHR5cGVvZihDb2RleC5JRmlsZVN0YXRpc3RpY3MpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbyksIHR5cGVvZihSZXBvc2l0b3J5U3RvcmVJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVwb3NpdG9yeVN0b3JlSW5mbyksIHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb21taXRGaWxlc0RpcmVjdG9yeSksIHR5cGVvZihDb21taXRGaWxlc0RpcmVjdG9yeSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvbW1pdEZpbGVzRGlyZWN0b3J5KSwgdHlwZW9mKENvZGV4LklDb21taXRGaWxlc0RpcmVjdG9yeSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTdG9yZWRCb3VuZFNvdXJjZUZpbGUpLCB0eXBlb2YoU3RvcmVkQm91bmRTb3VyY2VGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU3RvcmVkQm91bmRTb3VyY2VGaWxlKSwgdHlwZW9mKENvZGV4LklTdG9yZWRCb3VuZFNvdXJjZUZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblN5bWJvbCksIHR5cGVvZihEZWZpbml0aW9uU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoRGVmaW5pdGlvblN5bWJvbCksIHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpLCB0eXBlb2YoUmVmZXJlbmNlU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVmZXJlbmNlU3ltYm9sKSwgdHlwZW9mKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29kZVN5bWJvbCksIHR5cGVvZihTeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTeW1ib2wpLCB0eXBlb2YoQ29kZXguSUNvZGVTeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQpLCB0eXBlb2YoVGV4dExpbmVTcGFuUmVzdWx0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoVGV4dExpbmVTcGFuUmVzdWx0KSwgdHlwZW9mKENvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCksIHR5cGVvZihTZWFyY2hSZXN1bHQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTZWFyY2hSZXN1bHQpLCB0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JSW5kZXgpLCB0eXBlb2YoSW5kZXgpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihJbmRleCksIHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklJbmRleCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZU1hcHBpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVzY3JpYmVzIGEgY29tbWl0IGluIHZlcnNpb24gY29udHJvbFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXQgOiBDb21taXRTY29wZUVudGl0eSwgQ29kZXguSUNvbW1pdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5EYXRlVGltZSBtX0RhdGVVcGxvYWRlZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5EYXRlVGltZSBtX0RhdGVDb21taXR0ZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4gbV9QYXJlbnRDb21taXRJZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdENoYW5nZWRGaWxlPiBtX0NoYW5nZWRGaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdENoYW5nZWRGaWxlPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXQoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXQoQ29kZXguSUNvbW1pdCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0KENvZGV4LklDb21taXRTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdChDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb21taXQgZGVzY3JpcHRpb24gZGVzY3JpYmluZyB0aGUgY2hhbmdlc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRhdGUgdGhlIGNvbW1pdCB3YXMgc3RvcmVkIHRvIHRoZSBpbmRleFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkRhdGVUaW1lIERhdGVVcGxvYWRlZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RhdGVVcGxvYWRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RhdGVVcGxvYWRlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRhdGUgb2YgdGhlIGNvbW1pdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkRhdGVUaW1lIERhdGVDb21taXR0ZWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EYXRlQ29tbWl0dGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGF0ZUNvbW1pdHRlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIDxzZWUgY3JlZj1cIlA6Q29kZXguSUNvbW1pdFNjb3BlRW50aXR5LkNvbW1pdElkXCIgLz4gb2YgdGhlIHBhcmVudCBjb21taXRzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PHN0cmluZz4gQ29kZXguSUNvbW1pdC5QYXJlbnRDb21taXRJZHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUGFyZW50Q29tbWl0SWRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIDxzZWUgY3JlZj1cIlA6Q29kZXguSUNvbW1pdFNjb3BlRW50aXR5LkNvbW1pdElkXCIgLz4gb2YgdGhlIHBhcmVudCBjb21taXRzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4gUGFyZW50Q29tbWl0SWRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUGFyZW50Q29tbWl0SWRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUGFyZW50Q29tbWl0SWRzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZmlsZXMgY2hhbmdlZCBpbiB0aGUgY29tbWl0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb21taXRDaGFuZ2VkRmlsZT4gQ29kZXguSUNvbW1pdC5DaGFuZ2VkRmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ2hhbmdlZEZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGZpbGVzIGNoYW5nZWQgaW4gdGhlIGNvbW1pdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRDaGFuZ2VkRmlsZT4gQ2hhbmdlZEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ2hhbmdlZEZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2hhbmdlZEZpbGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29tbWl0IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0IHtcclxuICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gKChDb2RleC5JQ29tbWl0KSh2YWx1ZSkpLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGF0ZVVwbG9hZGVkID0gKChDb2RleC5JQ29tbWl0KSh2YWx1ZSkpLkRhdGVVcGxvYWRlZDtcclxuICAgICAgICAgICAgdGhpcy5tX0RhdGVDb21taXR0ZWQgPSAoKENvZGV4LklDb21taXQpKHZhbHVlKSkuRGF0ZUNvbW1pdHRlZDtcclxuICAgICAgICAgICAgdGhpcy5tX1BhcmVudENvbW1pdElkcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4oKChDb2RleC5JQ29tbWl0KSh2YWx1ZSkpLlBhcmVudENvbW1pdElkcyk7XHJcbiAgICAgICAgICAgIHRoaXMubV9DaGFuZ2VkRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRDaGFuZ2VkRmlsZT4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRDaGFuZ2VkRmlsZT4oKChDb2RleC5JQ29tbWl0KSh2YWx1ZSkpLkNoYW5nZWRGaWxlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0Q2hhbmdlZEZpbGU+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSUNvbW1pdENoYW5nZWRGaWxlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0Q2hhbmdlZEZpbGU+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvbW1pdENoYW5nZWRGaWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdENoYW5nZWRGaWxlPikoX3YgPT4gbmV3IENvbW1pdENoYW5nZWRGaWxlKCkuQ29weUZyb208Q29tbWl0Q2hhbmdlZEZpbGU+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPENvbW1pdFNjb3BlRW50aXR5PigoKENvZGV4LklDb21taXRTY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBSZXByZXNlbnRzIGEgY2hhbmdlZCBmaWxlIGluIGEgY29tbWl0XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29tbWl0Q2hhbmdlZEZpbGUgOiBDb21taXRGaWxlTGluaywgQ29kZXguSUNvbW1pdENoYW5nZWRGaWxlIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LkZpbGVDaGFuZ2VLaW5kIG1fQ2hhbmdlS2luZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX09yaWdpbmFsRmlsZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdENoYW5nZWRGaWxlKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0Q2hhbmdlZEZpbGUoQ29kZXguSUNvbW1pdENoYW5nZWRGaWxlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0Q2hhbmdlZEZpbGU+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdENoYW5nZWRGaWxlKENvZGV4LklDb21taXRGaWxlTGluayB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdHlwZSBvZiBjaGFuZ2UgYXBwbGllZCB0byB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguRmlsZUNoYW5nZUtpbmQgQ2hhbmdlS2luZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NoYW5nZUtpbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9DaGFuZ2VLaW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBGb3IgYSByZW5hbWVkIGZpbGUsIHRoZSBwYXRoIHRvIHRoZSBmaWxlIHByaW9yIHRvIHRoZSByZW5hbWVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBPcmlnaW5hbEZpbGVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fT3JpZ2luYWxGaWxlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX09yaWdpbmFsRmlsZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdENoYW5nZWRGaWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tX0NoYW5nZUtpbmQgPSAoKENvZGV4LklDb21taXRDaGFuZ2VkRmlsZSkodmFsdWUpKS5DaGFuZ2VLaW5kO1xyXG4gICAgICAgICAgICB0aGlzLm1fT3JpZ2luYWxGaWxlUGF0aCA9ICgoQ29kZXguSUNvbW1pdENoYW5nZWRGaWxlKSh2YWx1ZSkpLk9yaWdpbmFsRmlsZVBhdGg7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208Q29tbWl0RmlsZUxpbms+KCgoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIFJlcHJlc2VudHMgYSB2ZXJzaW9uIG9mIGEgcmVwb3NpdG9yeSBmaWxlIGZvciBhIGNvbW1pdFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZUxpbmspKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvbW1pdEZpbGVMaW5rIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNvbW1pdEZpbGVMaW5rIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9GaWxlSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9WZXJzaW9uQ29udHJvbEZpbGVJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZUxpbmsoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVMaW5rKENvZGV4LklDb21taXRGaWxlTGluayB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0RmlsZUxpbms+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVsYXRpdmUgcGF0aCBpbiB0aGUgcmVwb3NpdG9yeSB0byB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9SZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVW5pcXVlIGlkZW50aWZlciBmb3IgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEZpbGVJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbGVJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGVJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVW5pcXVlIGlkZW50aWZlciBmb3IgZmlsZSBjb250ZW50IGFzIGRldGVybWluZWQgYnkgdmVyc2lvbiBjb250cm9sXHJcbiAgICAgICAgLy8vIChpLmUuIHRoZSBibG9iIGhhc2gpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVmVyc2lvbkNvbnRyb2xGaWxlSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9WZXJzaW9uQ29udHJvbEZpbGVJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1ZlcnNpb25Db250cm9sRmlsZUlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29tbWl0RmlsZUxpbmsgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb21taXRGaWxlTGluayB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JQ29tbWl0RmlsZUxpbmspKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGVJZCA9ICgoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSh2YWx1ZSkpLkZpbGVJZDtcclxuICAgICAgICAgICAgdGhpcy5tX1ZlcnNpb25Db250cm9sRmlsZUlkID0gKChDb2RleC5JQ29tbWl0RmlsZUxpbmspKHZhbHVlKSkuVmVyc2lvbkNvbnRyb2xGaWxlSWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZXNjcmliZXMgYSBicmFuY2ggaW4gYSByZXBvc2l0b3J5XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklCcmFuY2gpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEJyYW5jaCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklCcmFuY2gge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fSGVhZENvbW1pdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCcmFuY2goKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJyYW5jaChDb2RleC5JQnJhbmNoIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxCcmFuY2g+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgYnJhbmNoXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgYnJhbmNoIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaGVhZCBjb21taXQgb2YgdGhlIGJyYW5jaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEhlYWRDb21taXRJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0hlYWRDb21taXRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0hlYWRDb21taXRJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUJyYW5jaCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEJyYW5jaCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JQnJhbmNoKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9ICgoQ29kZXguSUJyYW5jaCkodmFsdWUpKS5EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX0hlYWRDb21taXRJZCA9ICgoQ29kZXguSUJyYW5jaCkodmFsdWUpKS5IZWFkQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBSZXByZXNlbnRzIGEgc291cmNlIGZpbGUgd2l0aCBhc3NvY2lhdGVkIHNlbWFudGljIGJpbmRpbmdzXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZUZpbGUpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEJvdW5kU291cmNlRmlsZSA6IEJvdW5kU291cmNlSW5mbywgQ29kZXguSUJvdW5kU291cmNlRmlsZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VGaWxlIG1fU291cmNlRmlsZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VGaWxlKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VGaWxlKENvZGV4LklCb3VuZFNvdXJjZUZpbGUgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxCb3VuZFNvdXJjZUZpbGU+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlRmlsZShDb2RleC5JQm91bmRTb3VyY2VJbmZvIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VGaWxlKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzb3VyY2UgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVNvdXJjZUZpbGUgQ29kZXguSUJvdW5kU291cmNlRmlsZS5Tb3VyY2VGaWxlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNvdXJjZUZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNvdXJjZUZpbGUgU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VGaWxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQm91bmRTb3VyY2VGaWxlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQm91bmRTb3VyY2VGaWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUZpbGUgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlPihTb3VyY2VGaWxlLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGUsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZT4pKHYgPT4gbmV3IFNvdXJjZUZpbGUoKS5Db3B5RnJvbTxTb3VyY2VGaWxlPih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxCb3VuZFNvdXJjZUluZm8+KCgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VJbmZvKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBCb3VuZFNvdXJjZUluZm8gOiBQcm9qZWN0RmlsZVNjb3BlRW50aXR5LCBDb2RleC5JQm91bmRTb3VyY2VJbmZvIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5OdWxsYWJsZTxpbnQ+IG1fUmVmZXJlbmNlQ291bnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uTnVsbGFibGU8aW50PiBtX0RlZmluaXRpb25Db3VudDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0xhbmd1YWdlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxSZWZlcmVuY2VTcGFuPiBtX1JlZmVyZW5jZXMgPSBDb2RleC5VdGlsaXRpZXMuQ29sbGVjdGlvblV0aWxpdGllcy5FbXB0eTxSZWZlcmVuY2VTcGFuPi5BcnJheTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblNwYW4+IG1fRGVmaW5pdGlvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEZWZpbml0aW9uU3Bhbj4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q2xhc3NpZmljYXRpb25TcGFuPiBtX0NsYXNzaWZpY2F0aW9ucyA9IENvZGV4LlV0aWxpdGllcy5Db2xsZWN0aW9uVXRpbGl0aWVzLkVtcHR5PENsYXNzaWZpY2F0aW9uU3Bhbj4uQXJyYXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PE91dGxpbmluZ1JlZ2lvbj4gbV9PdXRsaW5pbmdSZWdpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8T3V0bGluaW5nUmVnaW9uPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBtX0V4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZUluZm8oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZUluZm8oQ29kZXguSUJvdW5kU291cmNlSW5mbyB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEJvdW5kU291cmNlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VJbmZvKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBudW1iZXIgb2YgcmVmZXJlbmNlcyBpbiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFJlZmVyZW5jZUNvdW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvZXJjZVJlZmVyZW5jZUNvdW50KHRoaXMubV9SZWZlcmVuY2VDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VDb3VudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG51bWJlciBvZiBkZWZpbml0aW9ucyBpbiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IERlZmluaXRpb25Db3VudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db2VyY2VEZWZpbml0aW9uQ291bnQodGhpcy5tX0RlZmluaXRpb25Db3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9uQ291bnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBsYW5ndWFnZSBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyBUT0RPOiBSZW1vdmVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBMYW5ndWFnZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xhbmd1YWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGFuZ3VhZ2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFJlZmVyZW5jZXMgZm9yIHRoZSBkb2N1bWVudC4gU29ydGVkLiBNYXkgb3ZlcmxhcC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVJlZmVyZW5jZVNwYW4+IENvZGV4LklCb3VuZFNvdXJjZUluZm8uUmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gUmVmZXJlbmNlcyBmb3IgdGhlIGRvY3VtZW50LiBTb3J0ZWQuIE1heSBvdmVybGFwLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxSZWZlcmVuY2VTcGFuPiBSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlZmluaXRpb25zIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZC4gTm8gb3ZlcmxhcD9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSURlZmluaXRpb25TcGFuPiBDb2RleC5JQm91bmRTb3VyY2VJbmZvLkRlZmluaXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRlZmluaXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVmaW5pdGlvbnMgZm9yIHRoZSBkb2N1bWVudC4gU29ydGVkLiBObyBvdmVybGFwP1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEZWZpbml0aW9uU3Bhbj4gRGVmaW5pdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZWZpbml0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb25zID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDbGFzc2lmaWNhdGlvbnMgZm9yIHRoZSBkb2N1bWVudC4gU29ydGVkIGJ5IHN0YXJ0IGluZGV4LiBObyBvdmVybGFwLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuPiBDb2RleC5JQm91bmRTb3VyY2VJbmZvLkNsYXNzaWZpY2F0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDbGFzc2lmaWNhdGlvbnMgZm9yIHRoZSBkb2N1bWVudC4gU29ydGVkIGJ5IHN0YXJ0IGluZGV4LiBObyBvdmVybGFwLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDbGFzc2lmaWNhdGlvblNwYW4+IENsYXNzaWZpY2F0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NsYXNzaWZpY2F0aW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gT3V0bGluaW5nIHJlZ2lvbnMgZm9yIHRoZSBkb2N1bWVudC4gTWF5IG92ZXJsYXAuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklPdXRsaW5pbmdSZWdpb24+IENvZGV4LklCb3VuZFNvdXJjZUluZm8uT3V0bGluaW5nUmVnaW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5PdXRsaW5pbmdSZWdpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gT3V0bGluaW5nIHJlZ2lvbnMgZm9yIHRoZSBkb2N1bWVudC4gTWF5IG92ZXJsYXAuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PE91dGxpbmluZ1JlZ2lvbj4gT3V0bGluaW5nUmVnaW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX091dGxpbmluZ1JlZ2lvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9PdXRsaW5pbmdSZWdpb25zID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmRpY2F0ZXMgdGhhdCB0aGUgZmlsZSBzaG91bGQgYmUgZXhjbHVkZWQgZnJvbSB0ZXh0IHNlYXJjaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBFeGNsdWRlRnJvbVNlYXJjaCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklCb3VuZFNvdXJjZUluZm8gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBCb3VuZFNvdXJjZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlQ291bnQgPSAoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkuUmVmZXJlbmNlQ291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9uQ291bnQgPSAoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkuRGVmaW5pdGlvbkNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLm1fTGFuZ3VhZ2UgPSAoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkuTGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UmVmZXJlbmNlU3Bhbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVNwYW4+KCgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5SZWZlcmVuY2VzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VTcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVNwYW4+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VTcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVNwYW4+KShfdiA9PiBuZXcgUmVmZXJlbmNlU3BhbigpLkNvcHlGcm9tPFJlZmVyZW5jZVNwYW4+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEZWZpbml0aW9uU3Bhbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3Bhbj4oKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLkRlZmluaXRpb25zLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3Bhbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3Bhbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblNwYW4+KShfdiA9PiBuZXcgRGVmaW5pdGlvblNwYW4oKS5Db3B5RnJvbTxEZWZpbml0aW9uU3Bhbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9DbGFzc2lmaWNhdGlvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDbGFzc2lmaWNhdGlvblNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3Bhbj4oKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLkNsYXNzaWZpY2F0aW9ucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3Bhbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ2xhc3NpZmljYXRpb25TcGFuPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ2xhc3NpZmljYXRpb25TcGFuPikoX3YgPT4gbmV3IENsYXNzaWZpY2F0aW9uU3BhbigpLkNvcHlGcm9tPENsYXNzaWZpY2F0aW9uU3Bhbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9PdXRsaW5pbmdSZWdpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8T3V0bGluaW5nUmVnaW9uPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklPdXRsaW5pbmdSZWdpb24sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5PdXRsaW5pbmdSZWdpb24+KCgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5PdXRsaW5pbmdSZWdpb25zLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklPdXRsaW5pbmdSZWdpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuT3V0bGluaW5nUmVnaW9uPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklPdXRsaW5pbmdSZWdpb24sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5PdXRsaW5pbmdSZWdpb24+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSU91dGxpbmluZ1JlZ2lvbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5PdXRsaW5pbmdSZWdpb24+KShfdiA9PiBuZXcgT3V0bGluaW5nUmVnaW9uKCkuQ29weUZyb208T3V0bGluaW5nUmVnaW9uPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoID0gKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLkV4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KCgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgYSBzb3VyY2UgZmlsZSBhcyBkZWZpbmVkIGJ5IHRoZSBzb3VyY2UgY29udHJvbCBwcm92aWRlclxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTb3VyY2VDb250cm9sRmlsZUluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1NvdXJjZUNvbnRyb2xDb250ZW50SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUNvbnRyb2xGaWxlSW5mbygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlQ29udHJvbEZpbGVJbmZvKENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUNvbnRyb2xGaWxlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVuaXF1ZSBpZCBmb3IgdGhlIHNvdXJjZSBmaWxlIGNvbnRlbnQgYXMgZGVmaW5lZCBieSB0aGUgc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKGkuZS4gZ2l0IFNIQSlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBTb3VyY2VDb250cm9sQ29udGVudElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU291cmNlQ29udHJvbENvbnRlbnRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xDb250ZW50SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTb3VyY2VDb250cm9sRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbENvbnRlbnRJZCA9ICgoQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbykodmFsdWUpKS5Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVNvdXJjZUZpbGVJbmZvKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTb3VyY2VGaWxlSW5mbyA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklTb3VyY2VGaWxlSW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9MaW5lcztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1NpemU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9MYW5ndWFnZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1dlYkFkZHJlc3M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBFbmNvZGluZ0Rlc2NyaXB0aW9uIG1fRW5jb2Rpbmc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBQcm9wZXJ0eU1hcCBtX1Byb3BlcnRpZXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZUluZm8oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGVJbmZvKENvZGV4LklTb3VyY2VGaWxlSW5mbyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlRmlsZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGVJbmZvKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZUluZm8oQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlRmlsZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGVJbmZvKENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlRmlsZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGVJbmZvKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG51bWJlciBvZiBsaW5lcyBpbiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IExpbmVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGluZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MaW5lcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNpemUgb2YgdGhlIGZpbGUgaW4gYnl0ZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBTaXplIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NpemUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBsYW5ndWFnZSBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyBUT0RPOiBSZW1vdmVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBMYW5ndWFnZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xhbmd1YWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGFuZ3VhZ2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB3ZWIgYWRkcmVzcyBvZiB0aGUgZmlsZS4gVE9ETzogUmVtb3ZlPyBJcyByZXBvIHJlbGF0aXZlIHBhdGggZW5vdWdoP1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFdlYkFkZHJlc3Mge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9XZWJBZGRyZXNzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fV2ViQWRkcmVzcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGVuY29kaW5nIHVzZWQgZm9yIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JRW5jb2RpbmdEZXNjcmlwdGlvbiBDb2RleC5JU291cmNlRmlsZUluZm8uRW5jb2Rpbmcge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRW5jb2Rpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZW5jb2RpbmcgdXNlZCBmb3IgdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEVuY29kaW5nRGVzY3JpcHRpb24gRW5jb2Rpbmcge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FbmNvZGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0VuY29kaW5nID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBFeHRlbnNpYmxlIGtleSB2YWx1ZSBwcm9wZXJ0aWVzIGZvciB0aGUgZG9jdW1lbnQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JUHJvcGVydHlNYXAgQ29kZXguSVNvdXJjZUZpbGVJbmZvLlByb3BlcnRpZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUHJvcGVydGllcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEV4dGVuc2libGUga2V5IHZhbHVlIHByb3BlcnRpZXMgZm9yIHRoZSBkb2N1bWVudC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFByb3BlcnR5TWFwIFByb3BlcnRpZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvcGVydGllcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlcG8gcmVsYXRpdmUgcGF0aCB0byB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9SZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb3NpdG9yeU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVbmlxdWUgaWQgZm9yIHRoZSBzb3VyY2UgZmlsZSBjb250ZW50IGFzIGRlZmluZWQgYnkgdGhlIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChpLmUuIGdpdCBTSEEpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgU291cmNlQ29udHJvbENvbnRlbnRJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUNvbnRyb2xDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcHJvamVjdCByZWxhdGl2ZSBwYXRoIG9mIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdFJlbGF0aXZlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgcHJvamVjdCBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTb3VyY2VGaWxlSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTb3VyY2VGaWxlSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkID0gKChDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvKSh2YWx1ZSkpLlNvdXJjZUNvbnRyb2xDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlRmlsZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU291cmNlRmlsZUluZm8gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTb3VyY2VGaWxlSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9MaW5lcyA9ICgoQ29kZXguSVNvdXJjZUZpbGVJbmZvKSh2YWx1ZSkpLkxpbmVzO1xyXG4gICAgICAgICAgICB0aGlzLm1fU2l6ZSA9ICgoQ29kZXguSVNvdXJjZUZpbGVJbmZvKSh2YWx1ZSkpLlNpemU7XHJcbiAgICAgICAgICAgIHRoaXMubV9MYW5ndWFnZSA9ICgoQ29kZXguSVNvdXJjZUZpbGVJbmZvKSh2YWx1ZSkpLkxhbmd1YWdlO1xyXG4gICAgICAgICAgICB0aGlzLm1fV2ViQWRkcmVzcyA9ICgoQ29kZXguSVNvdXJjZUZpbGVJbmZvKSh2YWx1ZSkpLldlYkFkZHJlc3M7XHJcbiAgICAgICAgICAgIHRoaXMubV9FbmNvZGluZyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRW5jb2RpbmdEZXNjcmlwdGlvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkVuY29kaW5nRGVzY3JpcHRpb24+KEVuY29kaW5nLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkVuY29kaW5nRGVzY3JpcHRpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRW5jb2RpbmdEZXNjcmlwdGlvbj4pKHYgPT4gbmV3IEVuY29kaW5nRGVzY3JpcHRpb24oKS5Db3B5RnJvbTxFbmNvZGluZ0Rlc2NyaXB0aW9uPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX1Byb3BlcnRpZXMgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvcGVydHlNYXA+KFByb3BlcnRpZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvcGVydHlNYXAsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvcGVydHlNYXA+KSh2ID0+IG5ldyBQcm9wZXJ0eU1hcCgpLkNvcHlGcm9tPFByb3BlcnR5TWFwPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xDb250ZW50SWQgPSAoKENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8pKHZhbHVlKSkuU291cmNlQ29udHJvbENvbnRlbnRJZDtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGggPSAoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVzY3JpYmVzIGVuY29kaW5nIHNvIHRoYXQgZmlsZSBtYXkgYmUgcmVjb25zdGl0dXRlZCBpbiBhIGJ5dGUtaWRlbnRpY2FsIGZvcm1cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEVuY29kaW5nRGVzY3JpcHRpb24gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JRW5jb2RpbmdEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgYnl0ZVtdIG1fUHJlYW1ibGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEVuY29kaW5nRGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEVuY29kaW5nRGVzY3JpcHRpb24oQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEVuY29kaW5nRGVzY3JpcHRpb24+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgZW5jb2RpbmdcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBlbmNvZGluZyBwcmVhbWJsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYnl0ZVtdIFByZWFtYmxlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJlYW1ibGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9QcmVhbWJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBFbmNvZGluZ0Rlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9QcmVhbWJsZSA9ICgoQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24pKHZhbHVlKSkuUHJlYW1ibGU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZWZpbmVzIHRleHQgY29udGVudHMgb2YgYSBmaWxlIGFuZCBhc3NvY2lhdGVkIGRhdGFcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVNvdXJjZUZpbGUpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFNvdXJjZUZpbGUgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JU291cmNlRmlsZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VGaWxlSW5mbyBtX0luZm87XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db250ZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBtX0V4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlKENvZGV4LklTb3VyY2VGaWxlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VGaWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVNvdXJjZUZpbGVJbmZvIENvZGV4LklTb3VyY2VGaWxlLkluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNvdXJjZUZpbGVJbmZvIEluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSW5mbyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvbnRlbnQgb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBDb250ZW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29udGVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZGljYXRlcyB0aGF0IHRoZSBmaWxlIHNob3VsZCBiZSBleGNsdWRlZCBmcm9tIHRleHQgc2VhcmNoXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEV4Y2x1ZGVGcm9tU2VhcmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNvdXJjZUZpbGUgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTb3VyY2VGaWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tX0luZm8gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZUluZm8+KEluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZUluZm8+KSh2ID0+IG5ldyBTb3VyY2VGaWxlSW5mbygpLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX0NvbnRlbnQgPSAoKENvZGV4LklTb3VyY2VGaWxlKSh2YWx1ZSkpLkNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaCA9ICgoQ29kZXguSVNvdXJjZUZpbGUpKHZhbHVlKSkuRXhjbHVkZUZyb21TZWFyY2g7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JT3V0bGluaW5nUmVnaW9uKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBPdXRsaW5pbmdSZWdpb24gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JT3V0bGluaW5nUmVnaW9uIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0tpbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBMaW5lU3BhbiBtX0hlYWRlcjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIExpbmVTcGFuIG1fQ29udGVudDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgT3V0bGluaW5nUmVnaW9uKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBPdXRsaW5pbmdSZWdpb24oQ29kZXguSU91dGxpbmluZ1JlZ2lvbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208T3V0bGluaW5nUmVnaW9uPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBLaW5kIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fS2luZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0tpbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlZmluZXMgdGhlIHJlZ2lvbiBjb250YWluaW5nIHRoZSBoZWFkZXIgdGV4dCBvZiB0aGUgb3V0bGluaW5nIHJlZ2lvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUxpbmVTcGFuIENvZGV4LklPdXRsaW5pbmdSZWdpb24uSGVhZGVyIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkhlYWRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlZmluZXMgdGhlIHJlZ2lvbiBjb250YWluaW5nIHRoZSBoZWFkZXIgdGV4dCBvZiB0aGUgb3V0bGluaW5nIHJlZ2lvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgTGluZVNwYW4gSGVhZGVyIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSGVhZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSGVhZGVyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbmVzIHRoZSByZWdpb24gY29udGFpbmluZyB0aGUgY29sbGFwc2libGUgY29udGVudCByZWdpb24gb2YgdGhlIG91dGxpbmluZyByZWdpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklMaW5lU3BhbiBDb2RleC5JT3V0bGluaW5nUmVnaW9uLkNvbnRlbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29udGVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlZmluZXMgdGhlIHJlZ2lvbiBjb250YWluaW5nIHRoZSBjb2xsYXBzaWJsZSBjb250ZW50IHJlZ2lvbiBvZiB0aGUgb3V0bGluaW5nIHJlZ2lvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgTGluZVNwYW4gQ29udGVudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JT3V0bGluaW5nUmVnaW9uIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogT3V0bGluaW5nUmVnaW9uIHtcclxuICAgICAgICAgICAgdGhpcy5tX0tpbmQgPSAoKENvZGV4LklPdXRsaW5pbmdSZWdpb24pKHZhbHVlKSkuS2luZDtcclxuICAgICAgICAgICAgdGhpcy5tX0hlYWRlciA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3Bhbj4oSGVhZGVyLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuPikodiA9PiBuZXcgTGluZVNwYW4oKS5Db3B5RnJvbTxMaW5lU3Bhbj4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db250ZW50ID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuPihDb250ZW50LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuPikodiA9PiBuZXcgTGluZVNwYW4oKS5Db3B5RnJvbTxMaW5lU3Bhbj4odikpKTs7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIERlZmluaXRpb25TcGFuIDogU3BhbiwgQ29kZXguSURlZmluaXRpb25TcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIERlZmluaXRpb25TeW1ib2wgbV9EZWZpbml0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxQYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4gbV9QYXJhbWV0ZXJzID0gQ29kZXguVXRpbGl0aWVzLkNvbGxlY3Rpb25VdGlsaXRpZXMuRW1wdHk8UGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+LkFycmF5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU3BhbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TcGFuKENvZGV4LklEZWZpbml0aW9uU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPERlZmluaXRpb25TcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVmaW5pdGlvbiBzeW1ib2wgcmVmZXJyZWQgdG8gYnkgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklEZWZpbml0aW9uU3ltYm9sIENvZGV4LklEZWZpbml0aW9uU3Bhbi5EZWZpbml0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRlZmluaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVmaW5pdGlvbiBzeW1ib2wgcmVmZXJyZWQgdG8gYnkgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIERlZmluaXRpb25TeW1ib2wgRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlZmluaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBHZXRzIHRoZSBkZWZpbml0aW9ucyBmb3IgcGFyYW1ldGVyc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+IENvZGV4LklEZWZpbml0aW9uU3Bhbi5QYXJhbWV0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBHZXRzIHRoZSBkZWZpbml0aW9ucyBmb3IgcGFyYW1ldGVyc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxQYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4gUGFyYW1ldGVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1BhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9QYXJhbWV0ZXJzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JRGVmaW5pdGlvblNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBEZWZpbml0aW9uU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9uID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4oRGVmaW5pdGlvbiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KSh2ID0+IG5ldyBEZWZpbml0aW9uU3ltYm9sKCkuQ29weUZyb208RGVmaW5pdGlvblN5bWJvbD4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9QYXJhbWV0ZXJzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+KCgoQ29kZXguSURlZmluaXRpb25TcGFuKSh2YWx1ZSkpLlBhcmFtZXRlcnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRlZmluaXRpb25TcGFuPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRlZmluaXRpb25TcGFuPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4pKF92ID0+IG5ldyBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbigpLkNvcHlGcm9tPFBhcmFtZXRlckRlZmluaXRpb25TcGFuPihfdikpKSkpKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTcGFuPigoKENvZGV4LklTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEEgc3BlY2lhbGl6ZWQgZGVmaW5pdGlvbiBzcGFuIHJlZmVycmluZyB0byBhIHBhcmFtZXRlciBvZiBhIG1ldGhvZC9wcm9wZXJ0eVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFBhcmFtZXRlckRlZmluaXRpb25TcGFuIDogTGluZVNwYW4sIENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9QYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX05hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlckRlZmluaXRpb25TcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4oQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlckRlZmluaXRpb25TcGFuKENvZGV4LklMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlckRlZmluaXRpb25TcGFuKENvZGV4LklTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpbmRleCBvZiB0aGUgcGFyYW1ldGVyIGluIHRoZSBsaXN0IG9mIHBhcmFtZXRlcnMgZm9yIHRoZSBtZXRob2RcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBQYXJhbWV0ZXJJbmRleCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1BhcmFtZXRlckluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVySW5kZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFBhcmFtZXRlckRlZmluaXRpb25TcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlckluZGV4ID0gKChDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4pKHZhbHVlKSkuUGFyYW1ldGVySW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4pKHZhbHVlKSkuTmFtZTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxMaW5lU3Bhbj4oKChDb2RleC5JTGluZVNwYW4pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlZmVyZW5jZVNwYW4gOiBTeW1ib2xTcGFuLCBDb2RleC5JUmVmZXJlbmNlU3BhbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xJZCBtX1JlbGF0ZWREZWZpbml0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgUmVmZXJlbmNlU3ltYm9sIG1fUmVmZXJlbmNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPiBtX1BhcmFtZXRlcnMgPSBDb2RleC5VdGlsaXRpZXMuQ29sbGVjdGlvblV0aWxpdGllcy5FbXB0eTxQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPi5BcnJheTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3BhbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNwYW4oQ29kZXguSVJlZmVyZW5jZVNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VTcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTcGFuKENvZGV4LklTeW1ib2xTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3BhbihDb2RleC5JVGV4dExpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3BhbihDb2RleC5JTGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTcGFuKENvZGV4LklTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEdldHMgdGhlIHN5bWJvbCBpZCBvZiB0aGUgZGVmaW5pdGlvbiB3aGljaCBwcm92aWRlcyB0aGlzIHJlZmVyZW5jZVxyXG4gICAgICAgIC8vLyAoaS5lLiBtZXRob2QgZGVmaW5pdGlvbiBmb3IgaW50ZXJmYWNlIGltcGxlbWVudGF0aW9uKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguT2JqZWN0TW9kZWwuU3ltYm9sSWQgUmVsYXRlZERlZmluaXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZWxhdGVkRGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlbGF0ZWREZWZpbml0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVmZXJlbmNlIHN5bWJvbCByZWZlcnJlZCB0byBieSB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVJlZmVyZW5jZVN5bWJvbCBDb2RleC5JUmVmZXJlbmNlU3Bhbi5SZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlZmVyZW5jZSBzeW1ib2wgcmVmZXJyZWQgdG8gYnkgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFJlZmVyZW5jZVN5bWJvbCBSZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEdldHMgdGhlIHJlZmVyZW5jZXMgdG8gcGFyYW1ldGVyc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4gQ29kZXguSVJlZmVyZW5jZVNwYW4uUGFyYW1ldGVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5QYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gR2V0cyB0aGUgcmVmZXJlbmNlcyB0byBwYXJhbWV0ZXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFBhcmFtZXRlclJlZmVyZW5jZVNwYW4+IFBhcmFtZXRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9QYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVycyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlZmVyZW5jZVNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlbGF0ZWREZWZpbml0aW9uID0gKChDb2RleC5JUmVmZXJlbmNlU3BhbikodmFsdWUpKS5SZWxhdGVkRGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3ltYm9sPihSZWZlcmVuY2UsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbD4pKHYgPT4gbmV3IFJlZmVyZW5jZVN5bWJvbCgpLkNvcHlGcm9tPFJlZmVyZW5jZVN5bWJvbD4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9QYXJhbWV0ZXJzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlclJlZmVyZW5jZVNwYW4+KCgoQ29kZXguSVJlZmVyZW5jZVNwYW4pKHZhbHVlKSkuUGFyYW1ldGVycywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPikoX3YgPT4gbmV3IFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oKS5Db3B5RnJvbTxQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPihfdikpKSkpKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTeW1ib2xTcGFuPigoKENvZGV4LklTeW1ib2xTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEEgc3BlY2lhbGl6ZWQgcmVmZXJlbmNlIHNwYW4gcmVmZXJyaW5nIHRvIGEgcGFyYW1ldGVyIHRvIGEgbWV0aG9kL3Byb3BlcnR5XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuIDogU3ltYm9sU3BhbiwgQ29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fUGFyYW1ldGVySW5kZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbihDb2RleC5JU3ltYm9sU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oQ29kZXguSVRleHRMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaW5kZXggb2YgdGhlIHBhcmFtZXRlciBpbiB0aGUgbGlzdCBvZiBwYXJhbWV0ZXJzIGZvciB0aGUgbWV0aG9kXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgUGFyYW1ldGVySW5kZXgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9QYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlckluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFBhcmFtZXRlclJlZmVyZW5jZVNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVySW5kZXggPSAoKENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKSh2YWx1ZSkpLlBhcmFtZXRlckluZGV4O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFN5bWJvbFNwYW4+KCgoQ29kZXguSVN5bWJvbFNwYW4pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVmaW5lcyBhIGNsYXNzaWZpZWQgc3BhbiBvZiB0ZXh0XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENsYXNzaWZpY2F0aW9uU3BhbiA6IFNwYW4sIENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fRGVmYXVsdENsYXNzaWZpY2F0aW9uQ29sb3I7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9DbGFzc2lmaWNhdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0xvY2FsR3JvdXBJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ2xhc3NpZmljYXRpb25TcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ2xhc3NpZmljYXRpb25TcGFuKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDbGFzc2lmaWNhdGlvblNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENsYXNzaWZpY2F0aW9uU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVmYXVsdCBjbGFzc2lmaWNhdGlvbiBjb2xvciBmb3IgdGhlIHNwYW4uIFRoaXMgaXMgdXNlZCBmb3JcclxuICAgICAgICAvLy8gY29udGV4dHMgd2hlcmUgYSBtYXBwaW5nIGZyb20gY2xhc3NpZmljYXRpb24gaWQgdG8gY29sb3IgaXMgbm90XHJcbiAgICAgICAgLy8vIGF2YWlsYWJsZS5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBEZWZhdWx0Q2xhc3NpZmljYXRpb25Db2xvciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlZmF1bHRDbGFzc2lmaWNhdGlvbkNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVmYXVsdENsYXNzaWZpY2F0aW9uQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjbGFzc2lmaWNhdGlvbiBpZGVudGlmaWVyIGZvciB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENsYXNzaWZpY2F0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ2xhc3NpZmljYXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9DbGFzc2lmaWNhdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgdG8gdGhlIGxvY2FsIGdyb3VwIG9mIHNwYW5zIHdoaWNoIHJlZmVyIHRvIHRoZSBzYW1lIGNvbW1vbiBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMb2NhbEdyb3VwSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Mb2NhbEdyb3VwSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Mb2NhbEdyb3VwSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDbGFzc2lmaWNhdGlvblNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVmYXVsdENsYXNzaWZpY2F0aW9uQ29sb3IgPSAoKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4pKHZhbHVlKSkuRGVmYXVsdENsYXNzaWZpY2F0aW9uQ29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMubV9DbGFzc2lmaWNhdGlvbiA9ICgoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbikodmFsdWUpKS5DbGFzc2lmaWNhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX0xvY2FsR3JvdXBJZCA9ICgoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbikodmFsdWUpKS5Mb2NhbEdyb3VwSWQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U3Bhbj4oKChDb2RleC5JU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU3ltYm9sU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU3ltYm9sU3BhbiA6IFRleHRMaW5lU3BhbiwgQ29kZXguSVN5bWJvbFNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2xTcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3ltYm9sU3BhbihDb2RleC5JU3ltYm9sU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFN5bWJvbFNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN5bWJvbFNwYW4oQ29kZXguSVRleHRMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN5bWJvbFNwYW4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3ltYm9sU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU3ltYm9sU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFN5bWJvbFNwYW4ge1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFRleHRMaW5lU3Bhbj4oKChDb2RleC5JVGV4dExpbmVTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklUZXh0TGluZVNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFRleHRMaW5lU3BhbiA6IExpbmVTcGFuLCBDb2RleC5JVGV4dExpbmVTcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0xpbmVTcGFuVGV4dDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dExpbmVTcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dExpbmVTcGFuKENvZGV4LklUZXh0TGluZVNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxUZXh0TGluZVNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhbihDb2RleC5JTGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0TGluZVNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGxpbmUgdGV4dFxyXG4gICAgICAgIC8vLyBUT0RPOiBJdCB3b3VsZCBiZSBuaWNlIHRvIG5vdCBzdG9yZSB0aGlzIGhlcmUgYW5kIGluc3RlYWQgYXBwbHkgaXQgYXMgYSBqb2luXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTGluZVNwYW5UZXh0IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGluZVNwYW5UZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZVNwYW5UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JVGV4dExpbmVTcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogVGV4dExpbmVTcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX0xpbmVTcGFuVGV4dCA9ICgoQ29kZXguSVRleHRMaW5lU3BhbikodmFsdWUpKS5MaW5lU3BhblRleHQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208TGluZVNwYW4+KCgoQ29kZXguSUxpbmVTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklMaW5lU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgTGluZVNwYW4gOiBTcGFuLCBDb2RleC5JTGluZVNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLk51bGxhYmxlPGludD4gbV9MaW5lSW5kZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uTnVsbGFibGU8aW50PiBtX0xpbmVOdW1iZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9MaW5lU3BhblN0YXJ0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fTGluZU9mZnNldDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGluZVNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMaW5lU3BhbihDb2RleC5JTGluZVNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxMaW5lU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGluZVNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIDAtYmFzZWQgaW5kZXggb2YgdGhlIGxpbmUgY29udGFpbmluZyB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IExpbmVJbmRleCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db2VyY2VMaW5lSW5kZXgodGhpcy5tX0xpbmVJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MaW5lSW5kZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSAxLWJhc2VkIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIGNvbnRhaW5pbmcgdGhlIHNwYW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMaW5lTnVtYmVyIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvZXJjZUxpbmVOdW1iZXIodGhpcy5tX0xpbmVOdW1iZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZU51bWJlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNoYXJhY3RlciBwb3NpdGlvbiB3aGVyZSB0aGUgc3BhbiBzdGFydHMgaW4gdGhlIGxpbmUgdGV4dFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IExpbmVTcGFuU3RhcnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MaW5lU3BhblN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGluZVNwYW5TdGFydCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSWYgcG9zaXRpdmUsIHRoZSBvZmZzZXQgb2YgdGhlIGxpbmUgc3BhbiBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpbmVcclxuICAgICAgICAvLy8gSWYgbmVnYXRpdmUsIHRoZSBvZmZzZXQgb2YgdGhlIGxpbmVzcGFuIGZyb20gdGhlIGVuZCBvZiB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgTGluZU9mZnNldCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xpbmVPZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MaW5lT2Zmc2V0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JTGluZVNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBMaW5lU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9MaW5lSW5kZXggPSAoKENvZGV4LklMaW5lU3BhbikodmFsdWUpKS5MaW5lSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMubV9MaW5lTnVtYmVyID0gKChDb2RleC5JTGluZVNwYW4pKHZhbHVlKSkuTGluZU51bWJlcjtcclxuICAgICAgICAgICAgdGhpcy5tX0xpbmVTcGFuU3RhcnQgPSAoKENvZGV4LklMaW5lU3BhbikodmFsdWUpKS5MaW5lU3BhblN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLm1fTGluZU9mZnNldCA9ICgoQ29kZXguSUxpbmVTcGFuKSh2YWx1ZSkpLkxpbmVPZmZzZXQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U3Bhbj4oKChDb2RleC5JU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU3BhbiA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklTcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1N0YXJ0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fTGVuZ3RoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTcGFuKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTcGFuKENvZGV4LklTcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGFic29sdXRlIGNoYXJhY3RlciBvZmZzZXQgb2YgdGhlIHNwYW4gd2l0aGluIHRoZSBkb2N1bWVudFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFN0YXJ0IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU3RhcnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TdGFydCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGxlbmd0aCBvZiB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IExlbmd0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xlbmd0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX1N0YXJ0ID0gKChDb2RleC5JU3BhbikodmFsdWUpKS5TdGFydDtcclxuICAgICAgICAgICAgdGhpcy5tX0xlbmd0aCA9ICgoQ29kZXguSVNwYW4pKHZhbHVlKSkuTGVuZ3RoO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXcpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvZGVSZXZpZXcgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29kZVJldmlldyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9JZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVXJsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguQ29kZVJldmlld1N0YXR1cyBtX1N0YXR1cztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlldygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlldyhDb2RleC5JQ29kZVJldmlldyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29kZVJldmlldz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0lkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVXJsIGZvciBhY2Nlc3NpbmcgY29kZSByZXZpZXcgaW4gc291cmNlIGNvbnRyb2wgbWFuYWdlbWVudCAoaS5lLiBHaXRIdWIgb3IgVlNPKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFVybCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1VybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1VybCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LkNvZGVSZXZpZXdTdGF0dXMgU3RhdHVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU3RhdHVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3RhdHVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29kZVJldmlldyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvZGVSZXZpZXcge1xyXG4gICAgICAgICAgICB0aGlzLm1fSWQgPSAoKENvZGV4LklDb2RlUmV2aWV3KSh2YWx1ZSkpLklkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSAoKENvZGV4LklDb2RlUmV2aWV3KSh2YWx1ZSkpLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fVXJsID0gKChDb2RleC5JQ29kZVJldmlldykodmFsdWUpKS5Vcmw7XHJcbiAgICAgICAgICAgIHRoaXMubV9TdGF0dXMgPSAoKENvZGV4LklDb2RlUmV2aWV3KSh2YWx1ZSkpLlN0YXR1cztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RlUmV2aWV3SXRlcmF0aW9uIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fSXRlcmF0aW9uTnVtYmVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmV2aWV3SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0ZpbGU+IG1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3RmlsZT4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0l0ZXJhdGlvbigpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0l0ZXJhdGlvbihDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29kZVJldmlld0l0ZXJhdGlvbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgSXRlcmF0aW9uTnVtYmVyIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSXRlcmF0aW9uTnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSXRlcmF0aW9uTnVtYmVyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJldmlld0lkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmV2aWV3SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXZpZXdJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb2RlUmV2aWV3RmlsZT4gQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24uRmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3RmlsZT4gRmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvZGVSZXZpZXdJdGVyYXRpb24ge1xyXG4gICAgICAgICAgICB0aGlzLm1fSXRlcmF0aW9uTnVtYmVyID0gKChDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbikodmFsdWUpKS5JdGVyYXRpb25OdW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXZpZXdJZCA9ICgoQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24pKHZhbHVlKSkuUmV2aWV3SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9ICgoQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24pKHZhbHVlKSkuRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvZGVSZXZpZXdGaWxlPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklDb2RlUmV2aWV3RmlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdGaWxlPigoKENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uKSh2YWx1ZSkpLkZpbGVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb2RlUmV2aWV3RmlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3RmlsZT4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0ZpbGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3RmlsZT4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0ZpbGUsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0ZpbGU+KShfdiA9PiBuZXcgQ29kZVJldmlld0ZpbGUoKS5Db3B5RnJvbTxDb2RlUmV2aWV3RmlsZT4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29kZVJldmlld2VySW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29kZVJldmlld2VySW5mbyA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX05hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdlckluZm8oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdlckluZm8oQ29kZXguSUNvZGVSZXZpZXdlckluZm8gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvZGVSZXZpZXdlckluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVSZXZpZXdlckluZm8gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb2RlUmV2aWV3ZXJJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29kZVJldmlld0ZpbGUpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvZGVSZXZpZXdGaWxlIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNvZGVSZXZpZXdGaWxlIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1N0YXJ0SXRlcmF0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0ZpbGVJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0Jhc2VsaW5lRmlsZUlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguRmlsZUNoYW5nZUtpbmQgbV9DaGFuZ2VLaW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3RmlsZSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0ZpbGUoQ29kZXguSUNvZGVSZXZpZXdGaWxlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb2RlUmV2aWV3RmlsZT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBmaXJzdCBpdGVyYXRpb24gaW4gd2hpY2ggdGhpcyBmaWxlIGFwcGVhcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBTdGFydEl0ZXJhdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1N0YXJ0SXRlcmF0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3RhcnRJdGVyYXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZWxhdGl2ZSBwYXRoIGluIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb1JlbGF0aXZlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZmlsZSBpZCBvZiB0aGUgbmV3IHZlcnNpb24gb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBGaWxlSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBmaWxlIGlkIG9mIHRoZSBiYXNlbGluZSB2ZXJzaW9uIG9mIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQmFzZWxpbmVGaWxlSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9CYXNlbGluZUZpbGVJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Jhc2VsaW5lRmlsZUlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdHlwZSBvZiBjaGFuZ2UgYXBwbGllZCB0byB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguRmlsZUNoYW5nZUtpbmQgQ2hhbmdlS2luZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NoYW5nZUtpbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9DaGFuZ2VLaW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29kZVJldmlld0ZpbGUgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb2RlUmV2aWV3RmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9TdGFydEl0ZXJhdGlvbiA9ICgoQ29kZXguSUNvZGVSZXZpZXdGaWxlKSh2YWx1ZSkpLlN0YXJ0SXRlcmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSUNvZGVSZXZpZXdGaWxlKSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWxlSWQgPSAoKENvZGV4LklDb2RlUmV2aWV3RmlsZSkodmFsdWUpKS5GaWxlSWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9CYXNlbGluZUZpbGVJZCA9ICgoQ29kZXguSUNvZGVSZXZpZXdGaWxlKSh2YWx1ZSkpLkJhc2VsaW5lRmlsZUlkO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ2hhbmdlS2luZCA9ICgoQ29kZXguSUNvZGVSZXZpZXdGaWxlKSh2YWx1ZSkpLkNoYW5nZUtpbmQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvZGVSZXZpZXdDb21tZW50VGhyZWFkIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIExpbmVTcGFuIG1fT3JpZ2luYWxTcGFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fU3RhcnRJdGVyYXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uRGF0ZVRpbWUgbV9MYXN0VXBkYXRlZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0ZpbGVSZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3Q29tbWVudD4gbV9Db21tZW50cyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvZGVSZXZpZXdDb21tZW50PigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3Q29tbWVudFRocmVhZCgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0NvbW1lbnRUaHJlYWQoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb2RlUmV2aWV3Q29tbWVudFRocmVhZD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBvcmlnaW5hbCBsb2NhdGlvbiBmb3IgdGhlIGNvbW1lbnQgaW4gdGhlIG9yaWdpbmF0aW5nIGl0ZXJhdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUxpbmVTcGFuIENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZC5PcmlnaW5hbFNwYW4ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuT3JpZ2luYWxTcGFuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG9yaWdpbmFsIGxvY2F0aW9uIGZvciB0aGUgY29tbWVudCBpbiB0aGUgb3JpZ2luYXRpbmcgaXRlcmF0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBMaW5lU3BhbiBPcmlnaW5hbFNwYW4ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9PcmlnaW5hbFNwYW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9PcmlnaW5hbFNwYW4gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpdGVyYXRpb24gd2hlcmUgdGhlIGNvbW1lbnQgb3JpZ2luYXRlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFN0YXJ0SXRlcmF0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU3RhcnRJdGVyYXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TdGFydEl0ZXJhdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGxhc3QgdGllXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uRGF0ZVRpbWUgTGFzdFVwZGF0ZWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MYXN0VXBkYXRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xhc3RVcGRhdGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEZpbGVSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZVJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlUmVwb1JlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSUNvZGVSZXZpZXdDb21tZW50PiBDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQuQ29tbWVudHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tbWVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3Q29tbWVudD4gQ29tbWVudHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21tZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnRzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb2RlUmV2aWV3Q29tbWVudFRocmVhZCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9PcmlnaW5hbFNwYW4gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4+KE9yaWdpbmFsU3BhbiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3Bhbj4pKHYgPT4gbmV3IExpbmVTcGFuKCkuQ29weUZyb208TGluZVNwYW4+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fU3RhcnRJdGVyYXRpb24gPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCkodmFsdWUpKS5TdGFydEl0ZXJhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX0xhc3RVcGRhdGVkID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQpKHZhbHVlKSkuTGFzdFVwZGF0ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWxlUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSh2YWx1ZSkpLkZpbGVSZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWVudHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3Q29tbWVudD4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0NvbW1lbnQsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3Q29tbWVudD4oKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQpKHZhbHVlKSkuQ29tbWVudHMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvZGVSZXZpZXdDb21tZW50LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdDb21tZW50PikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklDb2RlUmV2aWV3Q29tbWVudCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdDb21tZW50Pih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb2RlUmV2aWV3Q29tbWVudCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3Q29tbWVudD4pKF92ID0+IG5ldyBDb2RlUmV2aWV3Q29tbWVudCgpLkNvcHlGcm9tPENvZGVSZXZpZXdDb21tZW50PihfdikpKSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29kZVJldmlld0NvbW1lbnQgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29kZVJldmlld0NvbW1lbnQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVGV4dDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Jldmlld2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguQ29tbWVudEltcG9ydGFuY2UgbV9JbXBvcnRhbmNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkRhdGVUaW1lIG1fQ29tbWVudFRpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdDb21tZW50KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3Q29tbWVudChDb2RleC5JQ29kZVJldmlld0NvbW1lbnQgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvZGVSZXZpZXdDb21tZW50Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBUZXh0IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1RleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXZpZXdlciB3aGljaCBtYWRlIHRoZSBjb21tZW50XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmV2aWV3ZXIge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXZpZXdlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Jldmlld2VyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaW1wb3J0YW5jZSBvZiB0aGUgY29tbWVudFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguQ29tbWVudEltcG9ydGFuY2UgSW1wb3J0YW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ltcG9ydGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JbXBvcnRhbmNlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdGltZSB3aGVuIHRoZSBjb21tZW50IHdhcyBzdWJtaXR0ZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5EYXRlVGltZSBDb21tZW50VGltZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1lbnRUaW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWVudFRpbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvZGVSZXZpZXdDb21tZW50IHtcclxuICAgICAgICAgICAgdGhpcy5tX1RleHQgPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCkodmFsdWUpKS5UZXh0O1xyXG4gICAgICAgICAgICB0aGlzLm1fUmV2aWV3ZXIgPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCkodmFsdWUpKS5SZXZpZXdlcjtcclxuICAgICAgICAgICAgdGhpcy5tX0ltcG9ydGFuY2UgPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCkodmFsdWUpKS5JbXBvcnRhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWVudFRpbWUgPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCkodmFsdWUpKS5Db21tZW50VGltZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklMYW5ndWFnZUluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIExhbmd1YWdlSW5mbyA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklMYW5ndWFnZUluZm8ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q2xhc3NpZmljYXRpb25TdHlsZT4gbV9DbGFzc2lmaWNhdGlvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDbGFzc2lmaWNhdGlvblN0eWxlPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMYW5ndWFnZUluZm8oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExhbmd1YWdlSW5mbyhDb2RleC5JTGFuZ3VhZ2VJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxMYW5ndWFnZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgbGFuZ3VhZ2VcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlc2NyaWJlcyB0aGUgc3R5bGUgZm9yIGNsYXNzaWZpZWQgc3BhbnMuIFNlZSA8c2VlIGNyZWY9XCJQOkNvZGV4LklCb3VuZFNvdXJjZUluZm8uQ2xhc3NpZmljYXRpb25zXCIgLz4uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlPiBDb2RleC5JTGFuZ3VhZ2VJbmZvLkNsYXNzaWZpY2F0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZXNjcmliZXMgdGhlIHN0eWxlIGZvciBjbGFzc2lmaWVkIHNwYW5zLiBTZWUgPHNlZSBjcmVmPVwiUDpDb2RleC5JQm91bmRTb3VyY2VJbmZvLkNsYXNzaWZpY2F0aW9uc1wiIC8+LlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDbGFzc2lmaWNhdGlvblN0eWxlPiBDbGFzc2lmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9DbGFzc2lmaWNhdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklMYW5ndWFnZUluZm8gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBMYW5ndWFnZUluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSUxhbmd1YWdlSW5mbykodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ2xhc3NpZmljYXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q2xhc3NpZmljYXRpb25TdHlsZT4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3R5bGU+KCgoQ29kZXguSUxhbmd1YWdlSW5mbykodmFsdWUpKS5DbGFzc2lmaWNhdGlvbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ2xhc3NpZmljYXRpb25TdHlsZT4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNsYXNzaWZpY2F0aW9uU3R5bGU+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ2xhc3NpZmljYXRpb25TdHlsZT4pKF92ID0+IG5ldyBDbGFzc2lmaWNhdGlvblN0eWxlKCkuQ29weUZyb208Q2xhc3NpZmljYXRpb25TdHlsZT4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZXNjcmliZXMgc3R5bGluZyBmb3IgYSBnaXZlbiBjbGFzc2lmaWNhdGlvblxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ2xhc3NpZmljYXRpb25TdHlsZSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0NvbG9yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBtX0l0YWxpYztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX05hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENsYXNzaWZpY2F0aW9uU3R5bGUoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENsYXNzaWZpY2F0aW9uU3R5bGUoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENsYXNzaWZpY2F0aW9uU3R5bGU+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVmYXVsdCBjbGFzc2lmaWNhdGlvbiBjb2xvciBmb3IgdGhlIGNsYXNzaWZpY2F0aW9uLiBUaGlzIGlzIHVzZWQgZm9yXHJcbiAgICAgICAgLy8vIGNvbnRleHRzIHdoZXJlIGEgbWFwcGluZyBmcm9tIGNsYXNzaWZpY2F0aW9uIGlkIHRvIGNvbG9yIGlzIG5vdFxyXG4gICAgICAgIC8vLyBhdmFpbGFibGUuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgQ29sb3Ige1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BhbnMgY2xhc3NpZmllZCB3aXRoIHRoaXMgY2xhc3NpZmljYXRpb24gc2hvdWxkIGhhdmUgaXRhbGljIGZvbnQgYnkgZGVmYXVsdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBJdGFsaWMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JdGFsaWMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBjbGFzc2lmaWNhdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDbGFzc2lmaWNhdGlvblN0eWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbG9yID0gKChDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSkodmFsdWUpKS5Db2xvcjtcclxuICAgICAgICAgICAgdGhpcy5tX0l0YWxpYyA9ICgoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUpKHZhbHVlKSkuSXRhbGljO1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUpKHZhbHVlKSkuTmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQcm9qZWN0KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBBbmFseXplZFByb2plY3QgOiBQcm9qZWN0U2NvcGVFbnRpdHksIENvZGV4LklQcm9qZWN0IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RLaW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQcm9qZWN0RmlsZUxpbms+IG1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQcm9qZWN0RmlsZUxpbms+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlZmVyZW5jZWRQcm9qZWN0PiBtX1Byb2plY3RSZWZlcmVuY2VzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UmVmZXJlbmNlZFByb2plY3Q+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEFuYWx5emVkUHJvamVjdCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEFuYWx5emVkUHJvamVjdChDb2RleC5JUHJvamVjdCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEFuYWx5emVkUHJvamVjdD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQW5hbHl6ZWRQcm9qZWN0KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBBbmFseXplZFByb2plY3QoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcHJvamVjdCBraW5kIChzZWUgPHNlZSBjcmVmPVwiVDpDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0S2luZFwiIC8+KVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RLaW5kIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdEtpbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0S2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gUmVmZXJlbmNlcyB0byBmaWxlcyBpbiB0aGUgcHJvamVjdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JUHJvamVjdEZpbGVMaW5rPiBDb2RleC5JUHJvamVjdC5GaWxlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5GaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFJlZmVyZW5jZXMgdG8gZmlsZXMgaW4gdGhlIHByb2plY3RcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UHJvamVjdEZpbGVMaW5rPiBGaWxlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlc2NyaXB0aW9ucyBvZiByZWZlcmVuY2VkIHByb2plY3RzIGFuZCB1c2VkIGRlZmluaXRpb25zIGZyb20gdGhlIHByb2plY3RzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklSZWZlcmVuY2VkUHJvamVjdD4gQ29kZXguSVByb2plY3QuUHJvamVjdFJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUHJvamVjdFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZXNjcmlwdGlvbnMgb2YgcmVmZXJlbmNlZCBwcm9qZWN0cyBhbmQgdXNlZCBkZWZpbml0aW9ucyBmcm9tIHRoZSBwcm9qZWN0c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZWZlcmVuY2VkUHJvamVjdD4gUHJvamVjdFJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0UmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWZlcmVuY2VzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEFuYWx5emVkUHJvamVjdCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0S2luZCA9ICgoQ29kZXguSVByb2plY3QpKHZhbHVlKSkuUHJvamVjdEtpbmQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFByb2plY3RGaWxlTGluaz4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JUHJvamVjdEZpbGVMaW5rLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvamVjdEZpbGVMaW5rPigoKENvZGV4LklQcm9qZWN0KSh2YWx1ZSkpLkZpbGVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklQcm9qZWN0RmlsZUxpbmssIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvamVjdEZpbGVMaW5rPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklQcm9qZWN0RmlsZUxpbmssZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0RmlsZUxpbms+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVByb2plY3RGaWxlTGluaywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0RmlsZUxpbms+KShfdiA9PiBuZXcgUHJvamVjdEZpbGVMaW5rKCkuQ29weUZyb208UHJvamVjdEZpbGVMaW5rPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWZlcmVuY2VzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UmVmZXJlbmNlZFByb2plY3Q+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZWRQcm9qZWN0LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3Q+KCgoQ29kZXguSVByb2plY3QpKHZhbHVlKSkuUHJvamVjdFJlZmVyZW5jZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZWRQcm9qZWN0LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZWRQcm9qZWN0PikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VkUHJvamVjdCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZWRQcm9qZWN0Pih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VkUHJvamVjdCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdD4pKF92ID0+IG5ldyBSZWZlcmVuY2VkUHJvamVjdCgpLkNvcHlGcm9tPFJlZmVyZW5jZWRQcm9qZWN0PihfdikpKSkpKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxQcm9qZWN0U2NvcGVFbnRpdHk+KCgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlZFByb2plY3QpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlZmVyZW5jZWRQcm9qZWN0IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblN5bWJvbD4gbV9EZWZpbml0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TeW1ib2w+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EaXNwbGF5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFByb3BlcnR5TWFwIG1fUHJvcGVydGllcztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlZFByb2plY3QoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZWRQcm9qZWN0KENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlZFByb2plY3Q+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgcmVmZXJlbmNlZCBwcm9qZWN0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVc2VkIGRlZmluaXRpb25zIGZvciB0aGUgcHJvamVjdC4gU29ydGVkLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JRGVmaW5pdGlvblN5bWJvbD4gQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0LkRlZmluaXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRlZmluaXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVXNlZCBkZWZpbml0aW9ucyBmb3IgdGhlIHByb2plY3QuIFNvcnRlZC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblN5bWJvbD4gRGVmaW5pdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZWZpbml0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb25zID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSBwcm9qZWN0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGlzcGxheU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcHJvcGVydGllcyBvZiB0aGUgcHJvamVjdC4gU3VjaCBhcyBWZXJzaW9uLCBQdWJsaWNLZXksIGV0Yy5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklQcm9wZXJ0eU1hcCBDb2RleC5JUmVmZXJlbmNlZFByb2plY3QuUHJvcGVydGllcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Qcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb3BlcnRpZXMgb2YgdGhlIHByb2plY3QuIFN1Y2ggYXMgVmVyc2lvbiwgUHVibGljS2V5LCBldGMuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBQcm9wZXJ0eU1hcCBQcm9wZXJ0aWVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvcGVydGllcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb3BlcnRpZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZmVyZW5jZWRQcm9qZWN0IHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblN5bWJvbD4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KCgoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0KSh2YWx1ZSkpLkRlZmluaXRpb25zLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KShfdiA9PiBuZXcgRGVmaW5pdGlvblN5bWJvbCgpLkNvcHlGcm9tPERlZmluaXRpb25TeW1ib2w+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGlzcGxheU5hbWUgPSAoKENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCkodmFsdWUpKS5EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb3BlcnRpZXMgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvcGVydHlNYXA+KFByb3BlcnRpZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvcGVydHlNYXAsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvcGVydHlNYXA+KSh2ID0+IG5ldyBQcm9wZXJ0eU1hcCgpLkNvcHlGcm9tPFByb3BlcnR5TWFwPih2KSkpOztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIE5PVEU6IERvIG5vdCBzZXQgPHNlZSBjcmVmPVwiUDpDb2RleC5JUmVwb1Njb3BlRW50aXR5LlJlcG9zaXRvcnlOYW1lXCIgLz5cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb2plY3RGaWxlTGluaykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvamVjdEZpbGVMaW5rIDogUHJvamVjdEZpbGVTY29wZUVudGl0eSwgQ29kZXguSVByb2plY3RGaWxlTGluayB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9GaWxlSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RGaWxlTGluaygpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RGaWxlTGluayhDb2RleC5JUHJvamVjdEZpbGVMaW5rIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdEZpbGVMaW5rPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZUxpbmsoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVW5pcXVlIGlkZW50aWZpZXIgZm9yIGZpbGVcclxuICAgICAgICAvLy8gVE9ETzogTWFrZSB0aGlzIGNoZWNrc3VtIGFuZCBzZWFyY2hhYmxlIGFuZCB1c2UgZm9yIGRpc2NvdmVyaW5nIGNvbW1pdCBmcm9tIFBEQi5cclxuICAgICAgICAvLy8gVE9ETzogV2hhdCBpcyB0aGlzP1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEZpbGVJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbGVJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGVJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RGaWxlTGluayB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RGaWxlTGluayB7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWxlSWQgPSAoKENvZGV4LklQcm9qZWN0RmlsZUxpbmspKHZhbHVlKSkuRmlsZUlkO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KCgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVmaW5lcyBkb2N1bWVudGF0aW9uIGFib3V0IGEgc3ltYm9sXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRG9jdW1lbnRhdGlvbkluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGVjbGFyYXRpb25OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29tbWVudDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5bWJvbCBtX0Fzc29jaWF0ZWRTeW1ib2w7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+IG1fUmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9TdW1tYXJ5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVtYXJrcztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBtX0FyZ3VtZW50cyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gbV9UeXBlUGFyYW1ldGVycyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlckRvY3VtZW50YXRpb24+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gbV9FeGNlcHRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEb2N1bWVudGF0aW9uSW5mbygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRG9jdW1lbnRhdGlvbkluZm8oQ29kZXguSURvY3VtZW50YXRpb25JbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxEb2N1bWVudGF0aW9uSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWNsYXJhdGlvbiBuYW1lIGZvciB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGVjbGFyYXRpb25OYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVjbGFyYXRpb25OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVjbGFyYXRpb25OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWVudCBhcHBsaWVkIHRvIHRoZSBkZWZpbml0aW9uICh0aGlzIGlzIHRoZSByYXcgZG9jIGNvbW1lbnQgdGV4dClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBDb21tZW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIElkZW50aXR5IG9mIHN5bWJvbCB3aGljaCBnZW5lcmF0ZWQgdGhpcyBkb2N1bWVudGF0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JQ29kZVN5bWJvbCBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8uQXNzb2NpYXRlZFN5bWJvbCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Bc3NvY2lhdGVkU3ltYm9sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSWRlbnRpdHkgb2Ygc3ltYm9sIHdoaWNoIGdlbmVyYXRlZCB0aGlzIGRvY3VtZW50YXRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5bWJvbCBBc3NvY2lhdGVkU3ltYm9sIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQXNzb2NpYXRlZFN5bWJvbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Fzc29jaWF0ZWRTeW1ib2wgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBvdGhlciBzeW1ib2xzIHJlZmVyZW5jZWQgYnkgdGhpcyBzeW1ib2wgKGkuZS4gYmFzZSB0eXBlLCBpbXBsZW1lbnRlZCBpbnRlcmZhY2VcclxuICAgICAgICAvLy8gb3IgaW50ZXJmYWNlIG1lbWJlcnMsIG92ZXJyaWRkZW4gbWVtYmVycywgcmV0dXJuIHR5cGUgb2YgbWV0aG9kIG9yIHByb3BlcnR5IHR5cGUpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPiBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8uUmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG90aGVyIHN5bWJvbHMgcmVmZXJlbmNlZCBieSB0aGlzIHN5bWJvbCAoaS5lLiBiYXNlIHR5cGUsIGltcGxlbWVudGVkIGludGVyZmFjZVxyXG4gICAgICAgIC8vLyBvciBpbnRlcmZhY2UgbWVtYmVycywgb3ZlcnJpZGRlbiBtZW1iZXJzLCByZXR1cm4gdHlwZSBvZiBtZXRob2Qgb3IgcHJvcGVydHkgdHlwZSlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4gUmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZXNjcmliZXMgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFN1bW1hcnkge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TdW1tYXJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3VtbWFyeSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gU3VwcGxlbWVudGF0aW9uIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZW1hcmtzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVtYXJrcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlbWFya3MgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbW1lbnRzIG9uIGFyZ3VtZW50c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8uQXJndW1lbnRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkFyZ3VtZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbW1lbnRzIG9uIGFyZ3VtZW50c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+IEFyZ3VtZW50cyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0FyZ3VtZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0FyZ3VtZW50cyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tbWVudHMgb24gdHlwZSBwYXJhbWV0ZXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8uVHlwZVBhcmFtZXRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVHlwZVBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21tZW50cyBvbiB0eXBlIHBhcmFtZXRlcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gVHlwZVBhcmFtZXRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9UeXBlUGFyYW1ldGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1R5cGVQYXJhbWV0ZXJzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCBleGNlcHRpb25zIHdoaWNoIGNhbiBiZSB0aHJvd25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gQ29kZXguSURvY3VtZW50YXRpb25JbmZvLkV4Y2VwdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRXhjZXB0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IGV4Y2VwdGlvbnMgd2hpY2ggY2FuIGJlIHRocm93blxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+IEV4Y2VwdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FeGNlcHRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRXhjZXB0aW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSURvY3VtZW50YXRpb25JbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRG9jdW1lbnRhdGlvbkluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVjbGFyYXRpb25OYW1lID0gKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuRGVjbGFyYXRpb25OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9ICgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLkNvbW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9Bc3NvY2lhdGVkU3ltYm9sID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2w+KEFzc29jaWF0ZWRTeW1ib2wsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbD4pKHYgPT4gbmV3IFN5bWJvbCgpLkNvcHlGcm9tPFN5bWJvbD4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KCgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLlJlZmVyZW5jZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4pKF92ID0+IG5ldyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKCkuQ29weUZyb208RG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9TdW1tYXJ5ID0gKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuU3VtbWFyeTtcclxuICAgICAgICAgICAgdGhpcy5tX1JlbWFya3MgPSAoKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykodmFsdWUpKS5SZW1hcmtzO1xyXG4gICAgICAgICAgICB0aGlzLm1fQXJndW1lbnRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KCgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLkFyZ3VtZW50cywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPikoX3YgPT4gbmV3IFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbigpLkNvcHlGcm9tPFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9UeXBlUGFyYW1ldGVycyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFBhcmFtZXRlckRvY3VtZW50YXRpb24+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEb2N1bWVudGF0aW9uPigoKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykodmFsdWUpKS5UeXBlUGFyYW1ldGVycywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEb2N1bWVudGF0aW9uPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEb2N1bWVudGF0aW9uPikoX3YgPT4gbmV3IFBhcmFtZXRlckRvY3VtZW50YXRpb24oKS5Db3B5RnJvbTxQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX0V4Y2VwdGlvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuRXhjZXB0aW9ucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPikoX3YgPT4gbmV3IFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbigpLkNvcHlGcm9tPFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEb2N1bWVudGF0aW9uIGZvciBhIG1ldGhvZCBwYXJhbWV0ZXJcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFBhcmFtZXRlckRvY3VtZW50YXRpb24gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29tbWVudDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyRG9jdW1lbnRhdGlvbigpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyRG9jdW1lbnRhdGlvbihDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb21tZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29tbWVudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFBhcmFtZXRlckRvY3VtZW50YXRpb24ge1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24pKHZhbHVlKSkuTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnQgPSAoKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSh2YWx1ZSkpLkNvbW1lbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEb2N1bWVudGF0aW9uIGZvciB0eXBlZCBwYXJhbWV0ZXJcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIDogUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiwgQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIG1fVHlwZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbihDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdHlwZSBvZiB0aGUgcGFyYW1ldGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCBDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLlR5cGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0eXBlIG9mIHRoZSBwYXJhbWV0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgVHlwZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1R5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UeXBlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHtcclxuICAgICAgICAgICAgdGhpcy5tX1R5cGUgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPihUeXBlLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4pKHYgPT4gbmV3IERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2woKS5Db3B5RnJvbTxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPigoKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlY3JpYmVzIGEgc3ltYm9sIHJlbGF0ZWQgdG8gYSBnaXZlbiBkb2N1bWVudGVkIHN5bWJvbFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCA6IFJlZmVyZW5jZVN5bWJvbCwgQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGlzcGxheU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db21tZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbChDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2woQ29kZXguSVJlZmVyZW5jZVN5bWJvbCB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2woQ29kZXguSUNvZGVTeW1ib2wgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgc3ltYm9sIHJlZmVyZW5jZSBhcyBpdCBzaG91bGQgYXBwZWFyIGluIGRvY3VtZW50YXRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEaXNwbGF5TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Rpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGlzcGxheU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb21tZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVmZXJlbmNlXHJcbiAgICAgICAgLy8vIChpLmUuIHJldHVybiB0eXBlIGRlc2NyaXB0aW9uIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2RvdG5ldC9jc2hhcnAvcHJvZ3JhbW1pbmctZ3VpZGUveG1sZG9jL3JldHVybnMpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29tbWVudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wge1xyXG4gICAgICAgICAgICB0aGlzLm1fRGlzcGxheU5hbWUgPSAoKENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSh2YWx1ZSkpLkRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9ICgoQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkuQ29tbWVudDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxSZWZlcmVuY2VTeW1ib2w+KCgoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvcGVydHlTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvcGVydHlTZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fS2V5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Pd25lcklkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9wZXJ0eVNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvcGVydHlTZWFyY2hNb2RlbChDb2RleC5JUHJvcGVydHlTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb3BlcnR5U2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb3BlcnR5U2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEtleSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0tleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0tleSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFZhbHVlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9WYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIG9iamVjdCBvd25pbmcgdGhpcyBwcm9wZXJ0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE93bmVySWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Pd25lcklkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fT3duZXJJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9wZXJ0eVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX0tleSA9ICgoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwpKHZhbHVlKSkuS2V5O1xyXG4gICAgICAgICAgICB0aGlzLm1fVmFsdWUgPSAoKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsKSh2YWx1ZSkpLlZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm1fT3duZXJJZCA9ICgoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwpKHZhbHVlKSkuT3duZXJJZDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvcGVydHlNYXApKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFByb3BlcnR5TWFwIDogQ29kZXguSVByb3BlcnR5TWFwIHtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvcGVydHlNYXAoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb3BlcnR5TWFwKENvZGV4LklQcm9wZXJ0eU1hcCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvcGVydHlNYXA+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvcGVydHlNYXAgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9wZXJ0eU1hcCB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVwb3NpdG9yeSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklSZXBvc2l0b3J5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX05hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fV2ViQWRkcmVzcztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1NvdXJjZUNvbnRyb2xXZWJBZGRyZXNzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRmlsZVdlYkFkZHJlc3NUcmFuc2Zvcm1JbnB1dFJlZ2V4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJpbWFyeUJyYW5jaDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UmVwb3NpdG9yeVJlZmVyZW5jZT4gbV9SZXBvc2l0b3J5UmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlcG9zaXRvcnlSZWZlcmVuY2U+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9zaXRvcnkoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9zaXRvcnkoQ29kZXguSVJlcG9zaXRvcnkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlcG9zaXRvcnk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBmbyB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVzY3JpYmVzIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBXZWJBZGRyZXNzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fV2ViQWRkcmVzcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1dlYkFkZHJlc3MgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB3ZWIgYWRkcmVzcyBmb3Igc291cmNlIGNvbnRyb2wgb2YgdGhlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBTb3VyY2VDb250cm9sV2ViQWRkcmVzcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUNvbnRyb2xXZWJBZGRyZXNzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbFdlYkFkZHJlc3MgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZWdleCBmb3IgZXh0cmFjdGluZ1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEZpbGVXZWJBZGRyZXNzVHJhbnNmb3JtSW5wdXRSZWdleCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbGVXZWJBZGRyZXNzVHJhbnNmb3JtSW5wdXRSZWdleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGVXZWJBZGRyZXNzVHJhbnNmb3JtSW5wdXRSZWdleCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHByaW1hcnkgYnJhbmNoIGZvciB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByaW1hcnlCcmFuY2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9QcmltYXJ5QnJhbmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJpbWFyeUJyYW5jaCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2U+IENvZGV4LklSZXBvc2l0b3J5LlJlcG9zaXRvcnlSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlJlcG9zaXRvcnlSZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UmVwb3NpdG9yeVJlZmVyZW5jZT4gUmVwb3NpdG9yeVJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5UmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlSZWZlcmVuY2VzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb3NpdG9yeSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlcG9zaXRvcnkge1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSVJlcG9zaXRvcnkpKHZhbHVlKSkuTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX0lkID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5JZDtcclxuICAgICAgICAgICAgdGhpcy5tX1dlYkFkZHJlc3MgPSAoKENvZGV4LklSZXBvc2l0b3J5KSh2YWx1ZSkpLldlYkFkZHJlc3M7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sV2ViQWRkcmVzcyA9ICgoQ29kZXguSVJlcG9zaXRvcnkpKHZhbHVlKSkuU291cmNlQ29udHJvbFdlYkFkZHJlc3M7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXggPSAoKENvZGV4LklSZXBvc2l0b3J5KSh2YWx1ZSkpLkZpbGVXZWJBZGRyZXNzVHJhbnNmb3JtSW5wdXRSZWdleDtcclxuICAgICAgICAgICAgdGhpcy5tX1ByaW1hcnlCcmFuY2ggPSAoKENvZGV4LklSZXBvc2l0b3J5KSh2YWx1ZSkpLlByaW1hcnlCcmFuY2g7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5UmVmZXJlbmNlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlcG9zaXRvcnlSZWZlcmVuY2U+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5UmVmZXJlbmNlPigoKENvZGV4LklSZXBvc2l0b3J5KSh2YWx1ZSkpLlJlcG9zaXRvcnlSZWZlcmVuY2VzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnlSZWZlcmVuY2U+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5UmVmZXJlbmNlPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnlSZWZlcmVuY2U+KShfdiA9PiBuZXcgUmVwb3NpdG9yeVJlZmVyZW5jZSgpLkNvcHlGcm9tPFJlcG9zaXRvcnlSZWZlcmVuY2U+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9zaXRvcnlSZWZlcmVuY2UgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9zaXRvcnlSZWZlcmVuY2UoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9zaXRvcnlSZWZlcmVuY2UoQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlcG9zaXRvcnlSZWZlcmVuY2U+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcmVmZXJlbmNlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE9wdGlvbmFsLiBJZCBvZiByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0lkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlcG9zaXRvcnlSZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UpKHZhbHVlKSkuTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0lkID0gKChDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSkodmFsdWUpKS5JZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIE1hcmtlciBpbnRlcmZhY2UgZm9yIHNlYXJjaGFibGUgZW50aXRpZXNcclxuICAgIC8vLyBUT0RPOiBDb25zaWRlciBtb3ZpbmcgPHNlZSBjcmVmPVwiUDpDb2RleC5JU2VhcmNoRW50aXR5LkVudGl0eUNvbnRlbnRJZFwiIC8+IG91dCBpZiBpdHMgbm90IG5lZWRlZCBieSBhbGwgc2VhcmNoYWJsZSBlbnRpdGllc1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU2VhcmNoRW50aXR5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTZWFyY2hFbnRpdHkgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JU2VhcmNoRW50aXR5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1VpZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0VudGl0eUNvbnRlbnRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0VudGl0eUNvbnRlbnRTaXplO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLk51bGxhYmxlPGxvbmc+IG1fRW50aXR5VmVyc2lvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGxvbmcgbV9TaGFyZFN0YWJsZUlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNlYXJjaEVudGl0eShDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFVpZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1VpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1VpZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVmaW5lcyB0aGUgY29udGVudCBhZGRyZXNzYWJsZSBpZGVudGlmaWVyIGZvciB0aGUgZW50aXR5LiBUaGlzIGlzIHVzZWRcclxuICAgICAgICAvLy8gdG8gZGV0ZXJtaW5lIGlmIGFuIGVudGl0eSB3aXRoIHRoZSBzYW1lIDxzZWUgY3JlZj1cIlA6Q29kZXguSVNlYXJjaEVudGl0eS5VaWRcIiAvPiBzaG91bGQgYmUgdXBkYXRlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEVudGl0eUNvbnRlbnRJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0VudGl0eUNvbnRlbnRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0VudGl0eUNvbnRlbnRJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVmaW5lcyB0aGUgc2l6ZSBvZiB0aGUgcmF3IHNlcmlhbGl6ZWQgZW50aXR5LlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IEVudGl0eUNvbnRlbnRTaXplIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRW50aXR5Q29udGVudFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FbnRpdHlDb250ZW50U2l6ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHZlcnNpb24gbnVtYmVyIHVzZWQgd2hlbiBzdG9yaW5nIHRoZSBlbnRpdHkgKGZvciB1c2UgYnkgRWxhc3RpY1NlYXJjaCBjb25jdXJyZW5jeSBjb250cm9sXHJcbiAgICAgICAgLy8vIHRvIHByZXZlbnQgcmFjZXMgd2hlbiBzdG9yaW5nIHZhbHVlcylcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5OdWxsYWJsZTxsb25nPiBFbnRpdHlWZXJzaW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRW50aXR5VmVyc2lvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0VudGl0eVZlcnNpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwZXItc2hhcmQgc3RhYmxlIGlkZW50aXR5IChkZXJpdmVkIGZyb20gRWxhc3RpY1NlYXJjaCBzZXF1ZW5jZSBudW1iZXIpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBsb25nIFNoYXJkU3RhYmxlSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TaGFyZFN0YWJsZUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU2hhcmRTdGFibGVJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNlYXJjaEVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9VaWQgPSAoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkuVWlkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRW50aXR5Q29udGVudElkID0gKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpLkVudGl0eUNvbnRlbnRJZDtcclxuICAgICAgICAgICAgdGhpcy5tX0VudGl0eUNvbnRlbnRTaXplID0gKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpLkVudGl0eUNvbnRlbnRTaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1fRW50aXR5VmVyc2lvbiA9ICgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKS5FbnRpdHlWZXJzaW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fU2hhcmRTdGFibGVJZCA9ICgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKS5TaGFyZFN0YWJsZUlkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9TY29wZUVudGl0eSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVwb1Njb3BlRW50aXR5IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVJlcG9TY29wZUVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb1Njb3BlRW50aXR5KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvU2NvcGVFbnRpdHkoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVwb1Njb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb3NpdG9yeU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVwb1Njb3BlRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXRTY29wZUVudGl0eSA6IFJlcG9TY29wZUVudGl0eSwgQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbW1pdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRTY29wZUVudGl0eSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdFNjb3BlRW50aXR5KENvZGV4LklDb21taXRTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdFNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRTY29wZUVudGl0eShDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyBjb21taXQvY2hhbmdlc2V0IGluIHZlcnNpb24gY29udHJvbFxyXG4gICAgICAgIC8vLyAoaS5lLiBnaXQgY29tbWl0IGhhc2ggb3IgVEZTIGNoYW5nZXNldCBudW1iZXIpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29tbWl0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21taXRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1pdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb21taXRTY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21taXRJZCA9ICgoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5KSh2YWx1ZSkpLkNvbW1pdElkO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFJlcG9TY29wZUVudGl0eT4oKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFByb2plY3RTY29wZUVudGl0eSA6IFJlcG9TY29wZUVudGl0eSwgQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RTY29wZUVudGl0eSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RTY29wZUVudGl0eShDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdFNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0U2NvcGVFbnRpdHkoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgcHJvamVjdCBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0U2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxSZXBvU2NvcGVFbnRpdHk+KCgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVwb0ZpbGVTY29wZUVudGl0eSA6IFJlcG9TY29wZUVudGl0eSwgQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb0ZpbGVTY29wZUVudGl0eSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9GaWxlU2NvcGVFbnRpdHkoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZXBvRmlsZVNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvRmlsZVNjb3BlRW50aXR5KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlcG8gcmVsYXRpdmUgcGF0aCB0byB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9SZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZXBvRmlsZVNjb3BlRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UmVwb1Njb3BlRW50aXR5PigoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFByb2plY3RGaWxlU2NvcGVFbnRpdHkgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5KENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RGaWxlU2NvcGVFbnRpdHkoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdEZpbGVTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwcm9qZWN0IHJlbGF0aXZlIHBhdGggb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0UmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXBvIHJlbGF0aXZlIHBhdGggdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdEZpbGVTY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdEZpbGVTY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdEZpbGVTY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluIG9yZGVyIHRvIGNvbXB1dGUgYSBzdGFibGUgaW50ZWdyYWwgaWQgZm9yIGVhY2ggZW50aXR5LiBUaGlzIHR5cGUgaXMgdXNlZCB0byBzdG9yZSBpbnRvIGEgJ2ZvbGxvdycgaW5kZXggd2hpY2hcclxuICAgIC8vLyBzdG9yZXMgZW50aXRpZXMgb2YgdGhpcyB0eXBlIHVzaW5nIHRoZSA8c2VlIGNyZWY9XCJQOkNvZGV4LklTZWFyY2hFbnRpdHkuVWlkXCIgLz4gb2YgdGhlIGNvcnJlc3BvbmRpbmcgc2VhcmNoIGVudGl0eS4gVGhlbiB0aGVcclxuICAgIC8vLyBzZXF1ZW5jZSBudW1iZXIgYXNzaWduZWQgYnkgRWxhc3RpY1NlYXJjaCBpcyB1c2VkIGFzIHRoZSBzaGFyZCBzdGFibGUgaWQgKDxzZWUgY3JlZj1cIlA6Q29kZXguSVNlYXJjaEVudGl0eS5TaGFyZFN0YWJsZUlkXCIgLz4pXHJcbiAgICAvLy8gZm9yIHRoZSBlbnRpdHkuIFRoaXMgYXBwcm9hY2ggaXMgdXNlZCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgc3RhYmxlIGlkIGFwcGVhcnMgYXMgYW4gZXhwbGljaXQgZmllbGQgaW4gdGhlIGRvY3VtZW50IHJhdGhlclxyXG4gICAgLy8vIHdoaWNoIGFsbG93cyBjb25maWd1cmF0aW9uIG9mIGhvdyB0aGUgZmllbGQgaXMgaW5kZXhlZCAobm90IHRydWUgZm9yIHNlcXVlbmNlIG51bWJlciBmaWVsZCB3aXRob3V0IGNvZGUgY2hhbmdlcyB0byBFUykuXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZWdpc3RlcmVkRW50aXR5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZWdpc3RlcmVkRW50aXR5IDogU2VhcmNoRW50aXR5LCBDb2RleC5JUmVnaXN0ZXJlZEVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uRGF0ZVRpbWUgbV9EYXRlQWRkZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyZWRFbnRpdHkoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWdpc3RlcmVkRW50aXR5KENvZGV4LklSZWdpc3RlcmVkRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVnaXN0ZXJlZEVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXJlZEVudGl0eShDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkYXRlIGluIHdoaWNoIHRoZSBlbnRpdHkgd2FzIHJlZ2lzdGVyZWQgKGkuZS4gYWRkZWQgdG8gdGhlIHN0b3JlKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkRhdGVUaW1lIERhdGVBZGRlZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RhdGVBZGRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RhdGVBZGRlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlZ2lzdGVyZWRFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWdpc3RlcmVkRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX0RhdGVBZGRlZCA9ICgoQ29kZXguSVJlZ2lzdGVyZWRFbnRpdHkpKHZhbHVlKSkuRGF0ZUFkZGVkO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlZmluZXMgYSBzdG9yZWQgZmlsdGVyIHdoaWNoIG1hdGNoZXMgZW50aXRpZXMgaW4gYSBwYXJ0aWN1bGFyIGluZGV4IHNoYXJkIGluIGEgc3RhYmxlIG1hbm5lclxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU3RvcmVkRmlsdGVyKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTdG9yZWRGaWx0ZXIgOiBTZWFyY2hFbnRpdHksIENvZGV4LklTdG9yZWRGaWx0ZXIge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkRhdGVUaW1lIG1fRGF0ZVVwZGF0ZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9JbmRleE5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TaGFyZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8bG9uZz4gbV9TdGFibGVJZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxsb25nPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+IG1fQmFzZVVpZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGJ5dGVbXT4gbV9VbmlvbkZpbHRlcnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxieXRlW10+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBieXRlW10gbV9GaWx0ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9GaWx0ZXJIYXNoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fRmlsdGVyQ291bnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN0b3JlZEZpbHRlcigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN0b3JlZEZpbHRlcihDb2RleC5JU3RvcmVkRmlsdGVyIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U3RvcmVkRmlsdGVyPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTdG9yZWRGaWx0ZXIoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdGltZSBvZiB0aGUgbGFzdCB1cGRhdGUgdG8gdGhlIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5EYXRlVGltZSBEYXRlVXBkYXRlZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RhdGVVcGRhdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGF0ZVVwZGF0ZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBpbmRleCB0byB3aGljaCB0aGUgc3RvcmVkIGZpbHRlciBhcHBsaWVzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgSW5kZXhOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSW5kZXhOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSW5kZXhOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc2hhcmQgdG8gd2hpY2ggdGhlIHN0b3JlZCBmaWx0ZXIgYXBwbGllc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFNoYXJkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU2hhcmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TaGFyZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTGlzdCBvZiBzdGFibGUgaWRzIHRvIGluY2x1ZGUgaW4gdGhlIHN0b3JlZCBmaWx0ZXIuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PGxvbmc+IENvZGV4LklTdG9yZWRGaWx0ZXIuU3RhYmxlSWRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlN0YWJsZUlkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2Ygc3RhYmxlIGlkcyB0byBpbmNsdWRlIGluIHRoZSBzdG9yZWQgZmlsdGVyLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxsb25nPiBTdGFibGVJZHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TdGFibGVJZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TdGFibGVJZHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2YgdWlkcyB0byBmb3Igc3RvcmVkIGZpbHRlcnMgd2hpY2ggd2lsbCBiZSB1bmlvbmVkIHdpdGggdGhlIGdpdmVuIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8c3RyaW5nPiBDb2RleC5JU3RvcmVkRmlsdGVyLkJhc2VVaWRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJhc2VVaWRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTGlzdCBvZiB1aWRzIHRvIGZvciBzdG9yZWQgZmlsdGVycyB3aGljaCB3aWxsIGJlIHVuaW9uZWQgd2l0aCB0aGUgZ2l2ZW4gc3RvcmVkIGZpbHRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+IEJhc2VVaWRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQmFzZVVpZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9CYXNlVWlkcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTGlzdCBvZiBzdG9yZWQgZmlsdGVycyB3aGljaCB3aWxsIGJlIHVuaW9uZWQgd2l0aCB0aGUgZ2l2ZW4gc3RvcmVkIGZpbHRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxieXRlW10+IENvZGV4LklTdG9yZWRGaWx0ZXIuVW5pb25GaWx0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlVuaW9uRmlsdGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2Ygc3RvcmVkIGZpbHRlcnMgd2hpY2ggd2lsbCBiZSB1bmlvbmVkIHdpdGggdGhlIGdpdmVuIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Ynl0ZVtdPiBVbmlvbkZpbHRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9VbmlvbkZpbHRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9VbmlvbkZpbHRlcnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzdG9yZWQgZmlsdGVyIGJpdCBzZXQgd2hpY2ggbWF0Y2hlcyB0aGUgc3RvcmVkIGZpbHRlciBkb2N1bWVudHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJ5dGVbXSBGaWx0ZXIge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWx0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWx0ZXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBoYXNoIG9mIDxzZWUgY3JlZj1cIlA6Q29kZXguSVN0b3JlZEZpbHRlci5GaWx0ZXJcIiAvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEZpbHRlckhhc2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWx0ZXJIYXNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsdGVySGFzaCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvdW50IG9mIGVsZW1lbnRzIG1hdGNoZWQgYnkgPHNlZSBjcmVmPVwiUDpDb2RleC5JU3RvcmVkRmlsdGVyLkZpbHRlclwiIC8+XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgRmlsdGVyQ291bnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWx0ZXJDb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbHRlckNvdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU3RvcmVkRmlsdGVyIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU3RvcmVkRmlsdGVyIHtcclxuICAgICAgICAgICAgdGhpcy5tX0RhdGVVcGRhdGVkID0gKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLkRhdGVVcGRhdGVkO1xyXG4gICAgICAgICAgICB0aGlzLm1fSW5kZXhOYW1lID0gKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLkluZGV4TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1NoYXJkID0gKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLlNoYXJkO1xyXG4gICAgICAgICAgICB0aGlzLm1fU3RhYmxlSWRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8bG9uZz4oKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLlN0YWJsZUlkcyk7XHJcbiAgICAgICAgICAgIHRoaXMubV9CYXNlVWlkcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4oKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLkJhc2VVaWRzKTtcclxuICAgICAgICAgICAgdGhpcy5tX1VuaW9uRmlsdGVycyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGJ5dGVbXT4oKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLlVuaW9uRmlsdGVycyk7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWx0ZXIgPSAoKENvZGV4LklTdG9yZWRGaWx0ZXIpKHZhbHVlKSkuRmlsdGVyO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsdGVySGFzaCA9ICgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5GaWx0ZXJIYXNoO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsdGVyQ291bnQgPSAoKENvZGV4LklTdG9yZWRGaWx0ZXIpKHZhbHVlKSkuRmlsdGVyQ291bnQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRGVmaW5pdGlvblNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIERlZmluaXRpb25TeW1ib2wgbV9EZWZpbml0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+IG1fS2V5d29yZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TZWFyY2hNb2RlbChDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208RGVmaW5pdGlvblNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSURlZmluaXRpb25TeW1ib2wgQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbC5EZWZpbml0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRlZmluaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgRGVmaW5pdGlvblN5bWJvbCBEZWZpbml0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEtleXdvcmRzIGFyZSBhZGRpdGlvbmFsIHRlcm1zIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGZpbmQgYSBnaXZlbiBzeW1ib2wuXHJcbiAgICAgICAgLy8vIE5PVEU6IEtleXdvcmRzIGNhbiBvbmx5IGJlIHVzZWQgdG8gc2VsZWN0IGZyb20gc3ltYm9scyB3aGljaCBoYXZlXHJcbiAgICAgICAgLy8vIGEgcHJpbWFyeSB0ZXJtIG1hdGNoXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PHN0cmluZz4gQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbC5LZXl3b3JkcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5LZXl3b3JkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEtleXdvcmRzIGFyZSBhZGRpdGlvbmFsIHRlcm1zIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGZpbmQgYSBnaXZlbiBzeW1ib2wuXHJcbiAgICAgICAgLy8vIE5PVEU6IEtleXdvcmRzIGNhbiBvbmx5IGJlIHVzZWQgdG8gc2VsZWN0IGZyb20gc3ltYm9scyB3aGljaCBoYXZlXHJcbiAgICAgICAgLy8vIGEgcHJpbWFyeSB0ZXJtIG1hdGNoXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4gS2V5d29yZHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9LZXl3b3JkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0tleXdvcmRzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRGVmaW5pdGlvblNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb24gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPihEZWZpbml0aW9uLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2wsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4pKHYgPT4gbmV3IERlZmluaXRpb25TeW1ib2woKS5Db3B5RnJvbTxEZWZpbml0aW9uU3ltYm9sPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX0tleXdvcmRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPigoKENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwpKHZhbHVlKSkuS2V5d29yZHMpO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBMYW5ndWFnZVNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JTGFuZ3VhZ2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBMYW5ndWFnZUluZm8gbV9MYW5ndWFnZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGFuZ3VhZ2VTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExhbmd1YWdlU2VhcmNoTW9kZWwoQ29kZXguSUxhbmd1YWdlU2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxMYW5ndWFnZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMYW5ndWFnZVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklMYW5ndWFnZUluZm8gQ29kZXguSUxhbmd1YWdlU2VhcmNoTW9kZWwuTGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgTGFuZ3VhZ2VJbmZvIExhbmd1YWdlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MYW5ndWFnZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUxhbmd1YWdlU2VhcmNoTW9kZWwgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBMYW5ndWFnZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX0xhbmd1YWdlID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MYW5ndWFnZUluZm8sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MYW5ndWFnZUluZm8+KExhbmd1YWdlLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxhbmd1YWdlSW5mbywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MYW5ndWFnZUluZm8+KSh2ID0+IG5ldyBMYW5ndWFnZUluZm8oKS5Db3B5RnJvbTxMYW5ndWFnZUluZm8+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVmZXJlbmNlU2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeW1ib2wgbV9SZWZlcmVuY2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFN5bWJvbFNwYW4+IG1fU3BhbnMgPSBDb2RleC5VdGlsaXRpZXMuQ29sbGVjdGlvblV0aWxpdGllcy5FbXB0eTxTeW1ib2xTcGFuPi5BcnJheTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LklTeW1ib2xMaW5lU3Bhbkxpc3QgbV9Db21wcmVzc2VkU3BhbnM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVmZXJlbmNlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUNvZGVTeW1ib2wgQ29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsLlJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVmZXJlbmNlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3ltYm9sIFJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVN5bWJvbFNwYW4+IENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbC5TcGFucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TcGFucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFN5bWJvbFNwYW4+IFNwYW5zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvZXJjZVNwYW5zKHRoaXMubV9TcGFucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TcGFucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tcHJlc3NlZCBsaXN0IG9mIHNwYW5zXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5JU3ltYm9sTGluZVNwYW5MaXN0IENvbXByZXNzZWRTcGFucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbXByZXNzZWRTcGFucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRTcGFucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb2plY3QgcmVsYXRpdmUgcGF0aCBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RSZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlcG8gcmVsYXRpdmUgcGF0aCB0byB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9SZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb3NpdG9yeU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgcHJvamVjdCBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sPihSZWZlcmVuY2UsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbD4pKHYgPT4gbmV3IFN5bWJvbCgpLkNvcHlGcm9tPFN5bWJvbD4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9TcGFucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFN5bWJvbFNwYW4+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVN5bWJvbFNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xTcGFuPigoKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCkodmFsdWUpKS5TcGFucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JU3ltYm9sU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xTcGFuPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklTeW1ib2xTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sU3Bhbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JU3ltYm9sU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xTcGFuPikoX3YgPT4gbmV3IFN5bWJvbFNwYW4oKS5Db3B5RnJvbTxTeW1ib2xTcGFuPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRTcGFucyA9ICgoQ29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsKSh2YWx1ZSkpLkNvbXByZXNzZWRTcGFucztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFNvdXJjZVNlYXJjaE1vZGVsQmFzZSA6IFNlYXJjaEVudGl0eSwgQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VDb250cm9sRmlsZUluZm8gbV9Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlU2VhcmNoTW9kZWxCYXNlKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlU2VhcmNoTW9kZWxCYXNlKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VTZWFyY2hNb2RlbEJhc2U+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZVNlYXJjaE1vZGVsQmFzZShDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8gQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZS5Tb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBTb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTb3VyY2VTZWFyY2hNb2RlbEJhc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4oU291cmNlQ29udHJvbEluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4pKHYgPT4gbmV3IFNvdXJjZUNvbnRyb2xGaWxlSW5mbygpLkNvcHlGcm9tPFNvdXJjZUNvbnRyb2xGaWxlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEJvdW5kU291cmNlU2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1RleHRVaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VGaWxlSW5mbyBtX1NvdXJjZUluZm87XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBCb3VuZFNvdXJjZUluZm8gbV9CaW5kaW5nSW5mbztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LklDbGFzc2lmaWNhdGlvbkxpc3QgbV9Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguSVJlZmVyZW5jZUxpc3QgbV9Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBtX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VTZWFyY2hNb2RlbChDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEJvdW5kU291cmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlU2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlU2VhcmNoTW9kZWwoQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEJvdW5kU291cmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGFzc29jaWF0ZWQgPHNlZSBjcmVmPVwiVDpDb2RleC5JU291cmNlRmlsZVwiIC8+XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVGV4dFVpZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1RleHRVaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UZXh0VWlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VGaWxlSW5mbyBDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbC5Tb3VyY2VJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNvdXJjZUluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNvdXJjZUZpbGVJbmZvIFNvdXJjZUluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlSW5mbyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJpbmRpbmcgaW5mb1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUJvdW5kU291cmNlSW5mbyBDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbC5CaW5kaW5nSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CaW5kaW5nSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBiaW5kaW5nIGluZm9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEJvdW5kU291cmNlSW5mbyBCaW5kaW5nSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0JpbmRpbmdJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQmluZGluZ0luZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiBjbGFzc2lmaWNhdGlvbiBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguSUNsYXNzaWZpY2F0aW9uTGlzdCBDb21wcmVzc2VkQ2xhc3NpZmljYXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiByZWZlcmVuY2Ugc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LklSZWZlcmVuY2VMaXN0IENvbXByZXNzZWRSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tcHJlc3NlZFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkUmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyBDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlLlNvdXJjZUNvbnRyb2xJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU291cmNlQ29udHJvbEZpbGVJbmZvIFNvdXJjZUNvbnRyb2xJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU291cmNlQ29udHJvbEluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEJvdW5kU291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4oU291cmNlQ29udHJvbEluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4pKHYgPT4gbmV3IFNvdXJjZUNvbnRyb2xGaWxlSW5mbygpLkNvcHlGcm9tPFNvdXJjZUNvbnRyb2xGaWxlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEJvdW5kU291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fVGV4dFVpZCA9ICgoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuVGV4dFVpZDtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUluZm8gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZUluZm8+KFNvdXJjZUluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZUluZm8+KSh2ID0+IG5ldyBTb3VyY2VGaWxlSW5mbygpLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX0JpbmRpbmdJbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZUluZm8sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZUluZm8+KEJpbmRpbmdJbmZvLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlSW5mbywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZUluZm8+KSh2ID0+IG5ldyBCb3VuZFNvdXJjZUluZm8oKS5Db3B5RnJvbTxCb3VuZFNvdXJjZUluZm8+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucyA9ICgoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRSZWZlcmVuY2VzID0gKChDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCkodmFsdWUpKS5Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvPihTb3VyY2VDb250cm9sSW5mbywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvPikodiA9PiBuZXcgU291cmNlQ29udHJvbEZpbGVJbmZvKCkuQ29weUZyb208U291cmNlQ29udHJvbEZpbGVJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFRleHRTb3VyY2VTZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSVRleHRTb3VyY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VGaWxlIG1fRmlsZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBtX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0U291cmNlU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0U291cmNlU2VhcmNoTW9kZWwoQ29kZXguSVRleHRTb3VyY2VTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFRleHRTb3VyY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dFNvdXJjZVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0U291cmNlU2VhcmNoTW9kZWwoQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFRleHRTb3VyY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JU291cmNlRmlsZSBDb2RleC5JVGV4dFNvdXJjZVNlYXJjaE1vZGVsLkZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTb3VyY2VGaWxlIEZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyBDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlLlNvdXJjZUNvbnRyb2xJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU291cmNlQ29udHJvbEZpbGVJbmZvIFNvdXJjZUNvbnRyb2xJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU291cmNlQ29udHJvbEluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFRleHRTb3VyY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvPihTb3VyY2VDb250cm9sSW5mbywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvPikodiA9PiBuZXcgU291cmNlQ29udHJvbEZpbGVJbmZvKCkuQ29weUZyb208U291cmNlQ29udHJvbEZpbGVJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBUZXh0U291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGU+KEZpbGUsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlPikodiA9PiBuZXcgU291cmNlRmlsZSgpLkNvcHlGcm9tPFNvdXJjZUZpbGU+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8+KFNvdXJjZUNvbnRyb2xJbmZvLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8+KSh2ID0+IG5ldyBTb3VyY2VDb250cm9sRmlsZUluZm8oKS5Db3B5RnJvbTxTb3VyY2VDb250cm9sRmlsZUluZm8+KHYpKSk7O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVwb3NpdG9yeVNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JUmVwb3NpdG9yeVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFJlcG9zaXRvcnkgbV9SZXBvc2l0b3J5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5U2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5U2VhcmNoTW9kZWwoQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlcG9zaXRvcnlTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklSZXBvc2l0b3J5IENvZGV4LklSZXBvc2l0b3J5U2VhcmNoTW9kZWwuUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFJlcG9zaXRvcnkgUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb3NpdG9yeVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVwb3NpdG9yeVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnkgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnksZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5PihSZXBvc2l0b3J5LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnksIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeT4pKHYgPT4gbmV3IFJlcG9zaXRvcnkoKS5Db3B5RnJvbTxSZXBvc2l0b3J5Pih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9qZWN0U2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklQcm9qZWN0U2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQW5hbHl6ZWRQcm9qZWN0IG1fUHJvamVjdDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFNlYXJjaE1vZGVsKENvZGV4LklQcm9qZWN0U2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0U2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JUHJvamVjdCBDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsLlByb2plY3Qge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUHJvamVjdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBBbmFseXplZFByb2plY3QgUHJvamVjdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdFNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3QgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkFuYWx5emVkUHJvamVjdCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkFuYWx5emVkUHJvamVjdD4oUHJvamVjdCwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5BbmFseXplZFByb2plY3QsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQW5hbHl6ZWRQcm9qZWN0PikodiA9PiBuZXcgQW5hbHl6ZWRQcm9qZWN0KCkuQ29weUZyb208QW5hbHl6ZWRQcm9qZWN0Pih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgUmVmZXJlbmNlZFByb2plY3QgbV9Qcm9qZWN0UmVmZXJlbmNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JUmVmZXJlbmNlZFByb2plY3QgQ29kZXguSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbC5Qcm9qZWN0UmVmZXJlbmNlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlByb2plY3RSZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgUmVmZXJlbmNlZFByb2plY3QgUHJvamVjdFJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RSZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVmZXJlbmNlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgcHJvamVjdCBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlZmVyZW5jZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3QsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdD4oUHJvamVjdFJlZmVyZW5jZSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdD4pKHYgPT4gbmV3IFJlZmVyZW5jZWRQcm9qZWN0KCkuQ29weUZyb208UmVmZXJlbmNlZFByb2plY3Q+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb21taXRTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29tbWl0U2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklDb21taXRTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb21taXQgbV9Db21taXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdFNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0U2VhcmNoTW9kZWwoQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0U2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdFNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklDb21taXQgQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsLkNvbW1pdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21taXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29tbWl0IENvbW1pdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1pdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1pdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0U2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0ID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQ+KENvbW1pdCwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0PikodiA9PiBuZXcgQ29tbWl0KCkuQ29weUZyb208Q29tbWl0Pih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBUaGUgc2V0IG9mIGZpbGVzIHByZXNlbnQgaW4gdGhlIHJlcG9zaXRvcnkgYXQgYSBnaXZlbiBjb21taXQuXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXRGaWxlc1NlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdEZpbGVMaW5rPiBtX0NvbW1pdEZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db21taXRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc1NlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNTZWFyY2hNb2RlbChDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdEZpbGVzU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzU2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzU2VhcmNoTW9kZWwoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0RmlsZXNTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNTZWFyY2hNb2RlbChDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0RmlsZXNTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb21taXRGaWxlTGluaz4gQ29kZXguSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwuQ29tbWl0RmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tbWl0RmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4gQ29tbWl0RmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21taXRGaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1pdEZpbGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgY29tbWl0L2NoYW5nZXNldCBpbiB2ZXJzaW9uIGNvbnRyb2xcclxuICAgICAgICAvLy8gKGkuZS4gZ2l0IGNvbW1pdCBoYXNoIG9yIFRGUyBjaGFuZ2VzZXQgbnVtYmVyKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1pdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21taXRJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb3NpdG9yeU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdEZpbGVzU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0SWQgPSAoKENvZGV4LklDb21taXRTY29wZUVudGl0eSkodmFsdWUpKS5Db21taXRJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21taXRGaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdEZpbGVMaW5rPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklDb21taXRGaWxlTGluayxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rPigoKENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsKSh2YWx1ZSkpLkNvbW1pdEZpbGVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb21taXRGaWxlTGluaywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZUxpbms+KShfdiA9PiBuZXcgQ29tbWl0RmlsZUxpbmsoKS5Db3B5RnJvbTxDb21taXRGaWxlTGluaz4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0SWQgPSAoKENvZGV4LklDb21taXRTY29wZUVudGl0eSkodmFsdWUpKS5Db21taXRJZDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUZpbGVTdGF0aXN0aWNzKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBGaWxlU3RhdGlzdGljcyA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklGaWxlU3RhdGlzdGljcyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEZpbGVTdGF0aXN0aWNzKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBGaWxlU3RhdGlzdGljcyhDb2RleC5JRmlsZVN0YXRpc3RpY3MgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEZpbGVTdGF0aXN0aWNzPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUZpbGVTdGF0aXN0aWNzIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRmlsZVN0YXRpc3RpY3Mge1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW5mb3JtYXRpb24gZm9yIGNyZWF0aW5nIGFuIElDb2RleFJlcG9zaXRvcnlTdG9yZVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVwb3NpdG9yeVN0b3JlSW5mbyA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFJlcG9zaXRvcnkgbV9SZXBvc2l0b3J5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQnJhbmNoIG1fQnJhbmNoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29tbWl0IG1fQ29tbWl0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5U3RvcmVJbmZvKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvc2l0b3J5U3RvcmVJbmZvKENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZXBvc2l0b3J5U3RvcmVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlcG9zaXRvcnkgYmVpbmcgc3RvcmVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JUmVwb3NpdG9yeSBDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mby5SZXBvc2l0b3J5IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlJlcG9zaXRvcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVwb3NpdG9yeSBiZWluZyBzdG9yZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFJlcG9zaXRvcnkgUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgYnJhbmNoIGJlaW5nIHN0b3JlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUJyYW5jaCBDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mby5CcmFuY2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQnJhbmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJyYW5jaCBiZWluZyBzdG9yZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEJyYW5jaCBCcmFuY2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9CcmFuY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9CcmFuY2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb21taXQgYmVpbmcgc3RvcmVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JQ29tbWl0IENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvLkNvbW1pdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21taXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWl0IGJlaW5nIHN0b3JlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29tbWl0IENvbW1pdCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1pdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1pdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZXBvc2l0b3J5U3RvcmVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnkgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnksZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5PihSZXBvc2l0b3J5LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnksIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeT4pKHYgPT4gbmV3IFJlcG9zaXRvcnkoKS5Db3B5RnJvbTxSZXBvc2l0b3J5Pih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX0JyYW5jaCA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQnJhbmNoLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQnJhbmNoPihCcmFuY2gsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQnJhbmNoLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJyYW5jaD4pKHYgPT4gbmV3IEJyYW5jaCgpLkNvcHlGcm9tPEJyYW5jaD4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21taXQgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdD4oQ29tbWl0LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQ+KSh2ID0+IG5ldyBDb21taXQoKS5Db3B5RnJvbTxDb21taXQ+KHYpKSk7O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gUmVwcmVzZW50cyBhIGRpcmVjdG9yeSBpbiBzb3VyY2UgY29udHJvbFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZXNEaXJlY3RvcnkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvbW1pdEZpbGVzRGlyZWN0b3J5IDogUmVwb0ZpbGVTY29wZUVudGl0eSwgQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+IG1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNEaXJlY3RvcnkoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc0RpcmVjdG9yeShDb2RleC5JQ29tbWl0RmlsZXNEaXJlY3RvcnkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb21taXRGaWxlc0RpcmVjdG9yeT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNEaXJlY3RvcnkoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc0RpcmVjdG9yeShDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBmaWxlcyBpbiB0aGUgZGlyZWN0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDb21taXRGaWxlTGluaz4gQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5LkZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGZpbGVzIGluIHRoZSBkaXJlY3RvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+IEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0RmlsZXNEaXJlY3Rvcnkge1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4oKChDb2RleC5JQ29tbWl0RmlsZXNEaXJlY3RvcnkpKHZhbHVlKSkuRmlsZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvbW1pdEZpbGVMaW5rLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklDb21taXRGaWxlTGluayxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb21taXRGaWxlTGluaywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4pKF92ID0+IG5ldyBDb21taXRGaWxlTGluaygpLkNvcHlGcm9tPENvbW1pdEZpbGVMaW5rPihfdikpKSkpKTtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxSZXBvRmlsZVNjb3BlRW50aXR5PigoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTdG9yZWRCb3VuZFNvdXJjZUZpbGUpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFN0b3JlZEJvdW5kU291cmNlRmlsZSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklTdG9yZWRCb3VuZFNvdXJjZUZpbGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQm91bmRTb3VyY2VGaWxlIG1fQm91bmRTb3VyY2VGaWxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguSUNsYXNzaWZpY2F0aW9uTGlzdCBtX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5JUmVmZXJlbmNlTGlzdCBtX0NvbXByZXNzZWRSZWZlcmVuY2VzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTdG9yZWRCb3VuZFNvdXJjZUZpbGUoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN0b3JlZEJvdW5kU291cmNlRmlsZShDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTdG9yZWRCb3VuZFNvdXJjZUZpbGU+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSUJvdW5kU291cmNlRmlsZSBDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlLkJvdW5kU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Cb3VuZFNvdXJjZUZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQm91bmRTb3VyY2VGaWxlIEJvdW5kU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0JvdW5kU291cmNlRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0JvdW5kU291cmNlRmlsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tcHJlc3NlZCBsaXN0IG9mIGNsYXNzaWZpY2F0aW9uIHNwYW5zXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5JQ2xhc3NpZmljYXRpb25MaXN0IENvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tcHJlc3NlZCBsaXN0IG9mIHJlZmVyZW5jZSBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguSVJlZmVyZW5jZUxpc3QgQ29tcHJlc3NlZFJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRSZWZlcmVuY2VzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU3RvcmVkQm91bmRTb3VyY2VGaWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tX0JvdW5kU291cmNlRmlsZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VGaWxlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VGaWxlPihCb3VuZFNvdXJjZUZpbGUsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VGaWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlRmlsZT4pKHYgPT4gbmV3IEJvdW5kU291cmNlRmlsZSgpLkNvcHlGcm9tPEJvdW5kU291cmNlRmlsZT4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zID0gKChDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlKSh2YWx1ZSkpLkNvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkUmVmZXJlbmNlcyA9ICgoQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSkodmFsdWUpKS5Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBEZWZpbml0aW9uU3ltYm9sIDogUmVmZXJlbmNlU3ltYm9sLCBDb2RleC5JRGVmaW5pdGlvblN5bWJvbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9VaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EaXNwbGF5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Nob3J0TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbnRhaW5lclF1YWxpZmllZE5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmdbXSBtX01vZGlmaWVycztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4Lk9iamVjdE1vZGVsLkdseXBoIG1fR2x5cGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TeW1ib2xEZXB0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIERvY3VtZW50YXRpb25JbmZvIG1fRG9jdW1lbnRhdGlvbkluZm87XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9UeXBlTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0RlY2xhcmF0aW9uTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TeW1ib2woKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU3ltYm9sKENvZGV4LklEZWZpbml0aW9uU3ltYm9sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208RGVmaW5pdGlvblN5bWJvbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblN5bWJvbChDb2RleC5JUmVmZXJlbmNlU3ltYm9sIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblN5bWJvbChDb2RleC5JQ29kZVN5bWJvbCB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gTk9URTogVGhpcyBpcyBub3QgYXBwbGljYWJsZSB0byBtb3N0IHN5bWJvbHMuIE9ubHkgc2V0IGZvciBzeW1ib2xzXHJcbiAgICAgICAgLy8vIHdoaWNoIGFyZSBhZGRlZCBpbiBhIHNoYXJlZCBjb250ZXh0IGFuZCBuZWVkIHRoaXMgZm9yIGRlZHVwbGljYXRpb24pXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVWlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVWlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVWlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEaXNwbGF5TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Rpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGlzcGxheU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzaG9ydCBuYW1lIG9mIHRoZSBzeW1ib2wgKGkuZS4gVGFzaykuXHJcbiAgICAgICAgLy8vIFRoaXMgaXMgdXNlZCB0byBmaW5kIHRoZSBzeW1ib2wgd2hlbiBzZWFyY2ggdGVybSBkb2VzIG5vdCBjb250YWluICcuJ1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFNob3J0TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db2VyY2VTaG9ydE5hbWUodGhpcy5tX1Nob3J0TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TaG9ydE5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBxdWFsaWZpZWQgbmFtZSBvZiB0aGUgc3ltYm9sIChpLmUuIFN5c3RlbS5UaHJlYWRpbmcuVGFza3MuVGFzaykuXHJcbiAgICAgICAgLy8vIFRoaXMgaXMgdXNlZCB0byBmaW5kIHRoZSBzeW1ib2wgd2hlbiB0aGUgc2VhcmNoIHRlcm0gY29udGFpbnMgJy4nXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29udGFpbmVyUXVhbGlmaWVkTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbnRhaW5lclF1YWxpZmllZE5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db250YWluZXJRdWFsaWZpZWROYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBNb2RpZmllcnMgZm9yIHRoZSBzeW1ib2wgc3VjaCBhcyBwdWJsaWNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZ1tdIE1vZGlmaWVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX01vZGlmaWVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX01vZGlmaWVycyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGdseXBoXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5PYmplY3RNb2RlbC5HbHlwaCBHbHlwaCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0dseXBoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fR2x5cGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZXB0aCBvZiB0aGUgc3ltYm9sIGluIGl0cyBzeW1ib2xpYyB0cmVlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgU3ltYm9sRGVwdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TeW1ib2xEZXB0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1N5bWJvbERlcHRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEb2N1bWVudGF0aW9uIGZvciB0aGUgc3ltYm9sIChpZiBhbnkpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8gQ29kZXguSURlZmluaXRpb25TeW1ib2wuRG9jdW1lbnRhdGlvbkluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9jdW1lbnRhdGlvbkluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEb2N1bWVudGF0aW9uIGZvciB0aGUgc3ltYm9sIChpZiBhbnkpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBEb2N1bWVudGF0aW9uSW5mbyBEb2N1bWVudGF0aW9uSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RvY3VtZW50YXRpb25JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRG9jdW1lbnRhdGlvbkluZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSB0eXBlIGZvciB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIChpLmUuIHJldHVybiB0eXBlIG9mIG1ldGhvZClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBUeXBlTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1R5cGVOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVHlwZU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWNsYXJhdGlvbiBuYW1lIGZvciB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGVjbGFyYXRpb25OYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVjbGFyYXRpb25OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVjbGFyYXRpb25OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWVudCBhcHBsaWVkIHRvIHRoZSBkZWZpbml0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ29tbWVudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JRGVmaW5pdGlvblN5bWJvbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IERlZmluaXRpb25TeW1ib2wge1xyXG4gICAgICAgICAgICB0aGlzLm1fVWlkID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5VaWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9EaXNwbGF5TmFtZSA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9TaG9ydE5hbWUgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLlNob3J0TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbnRhaW5lclF1YWxpZmllZE5hbWUgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLkNvbnRhaW5lclF1YWxpZmllZE5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Nb2RpZmllcnMgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLk1vZGlmaWVycztcclxuICAgICAgICAgICAgdGhpcy5tX0dseXBoID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5HbHlwaDtcclxuICAgICAgICAgICAgdGhpcy5tX1N5bWJvbERlcHRoID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5TeW1ib2xEZXB0aDtcclxuICAgICAgICAgICAgdGhpcy5tX0RvY3VtZW50YXRpb25JbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25JbmZvPihEb2N1bWVudGF0aW9uSW5mbywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uSW5mbywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uSW5mbz4pKHYgPT4gbmV3IERvY3VtZW50YXRpb25JbmZvKCkuQ29weUZyb208RG9jdW1lbnRhdGlvbkluZm8+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fVHlwZU5hbWUgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLlR5cGVOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVjbGFyYXRpb25OYW1lID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5EZWNsYXJhdGlvbk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5Db21tZW50O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFJlZmVyZW5jZVN5bWJvbD4oKChDb2RleC5JUmVmZXJlbmNlU3ltYm9sKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlZmVyZW5jZVN5bWJvbCA6IFN5bWJvbCwgQ29kZXguSVJlZmVyZW5jZVN5bWJvbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZWZlcmVuY2VLaW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBtX0lzSW1wbGljaXRseURlY2xhcmVkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBtX0V4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3ltYm9sKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3ltYm9sKENvZGV4LklSZWZlcmVuY2VTeW1ib2wgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VTeW1ib2w+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVN5bWJvbChDb2RleC5JQ29kZVN5bWJvbCB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUga2luZCBvZiByZWZlcmVuY2UuIFRoaXMgaXMgdXNlZCB0byBncm91cCByZWZlcmVuY2VzLlxyXG4gICAgICAgIC8vLyAoaS5lLiBmb3IgQyMoYWthIC5ORVQpIE1ldGhvZE92ZXJyaWRlLCBJbnRlcmZhY2VNZW1iZXJJbXBsZW1lbnRhdGlvbiwgSW50ZXJmYWNlSW1wbGVtZW50YXRpb24sIGV0Yy4pXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVmZXJlbmNlS2luZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZUtpbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VLaW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmRpY2F0ZXMgdGhlIGNvcnJlc3BvbmRpbmcgZGVmaW5pdGlvbiBpcyBpbXBsaWNpdGx5IGRlY2xhcmVkIGFuZCB0aGVyZWZvcmUgdGhpcyBzaG91bGQgbm90IGJlXHJcbiAgICAgICAgLy8vIHVzZWQgZm9yIGZpbmQgYWxsIHJlZmVyZW5jZXMgc2VhcmNoXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIElzSW1wbGljaXRseURlY2xhcmVkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSXNJbXBsaWNpdGx5RGVjbGFyZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Jc0ltcGxpY2l0bHlEZWNsYXJlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5kaWNhdGVzIGlmIHRoZSBzeW1ib2wgc2hvdWxkIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlZmluaXRpb24vZmluZCBhbGwgcmVmZXJlbmNlcyBzZWFyY2ggKGJ5IGRlZmF1bHQpLlxyXG4gICAgICAgIC8vLyBTeW1ib2wgd2lsbCBvbmx5IGJlIGluY2x1ZGVkIGlmIGtpbmQgaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmRpY2F0ZXMgaWYgdGhlIHN5bWJvbCBzaG91bGQgTkVWRVIgYmUgaW5jbHVkZWQgaW4gdGhlIGRlZmluaXRpb24vZmluZCBhbGwgcmVmZXJlbmNlcyBzZWFyY2guXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEV4Y2x1ZGVGcm9tU2VhcmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlZmVyZW5jZVN5bWJvbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZmVyZW5jZVN5bWJvbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VLaW5kID0gKChDb2RleC5JUmVmZXJlbmNlU3ltYm9sKSh2YWx1ZSkpLlJlZmVyZW5jZUtpbmQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9Jc0ltcGxpY2l0bHlEZWNsYXJlZCA9ICgoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKS5Jc0ltcGxpY2l0bHlEZWNsYXJlZDtcclxuICAgICAgICAgICAgdGhpcy5tX0V4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaCA9ICgoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKS5FeGNsdWRlRnJvbURlZmF1bHRTZWFyY2g7XHJcbiAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaCA9ICgoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKS5FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTeW1ib2w+KCgoQ29kZXguSUNvZGVTeW1ib2wpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVTeW1ib2wpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFN5bWJvbCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlU3ltYm9sIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbElkIG1fSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9LaW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2woKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN5bWJvbChDb2RleC5JQ29kZVN5bWJvbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U3ltYm9sPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgaW4gd2hpY2ggdGhlIHN5bWJvbCBhcHBlYXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBmb3IgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguT2JqZWN0TW9kZWwuU3ltYm9sSWQgSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0lkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc3ltYm9sIGtpbmQuIChpLmUuIGludGVyZmFjZSwgbWV0aG9kLCBmaWVsZClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBLaW5kIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fS2luZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0tpbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb2RlU3ltYm9sIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU3ltYm9sIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSUNvZGVTeW1ib2wpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICB0aGlzLm1fSWQgPSAoKENvZGV4LklDb2RlU3ltYm9sKSh2YWx1ZSkpLklkO1xyXG4gICAgICAgICAgICB0aGlzLm1fS2luZCA9ICgoQ29kZXguSUNvZGVTeW1ib2wpKHZhbHVlKSkuS2luZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgVGV4dExpbmVTcGFuUmVzdWx0IDogUHJvamVjdEZpbGVTY29wZUVudGl0eSwgQ29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFRleHRMaW5lU3BhbiBtX1RleHRTcGFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0TGluZVNwYW5SZXN1bHQoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0TGluZVNwYW5SZXN1bHQoQ29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208VGV4dExpbmVTcGFuUmVzdWx0Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0TGluZVNwYW5SZXN1bHQoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklUZXh0TGluZVNwYW4gQ29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0LlRleHRTcGFuIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlRleHRTcGFuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRleHRMaW5lU3BhbiBUZXh0U3BhbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1RleHRTcGFuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVGV4dFNwYW4gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFRleHRMaW5lU3BhblJlc3VsdCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9UZXh0U3BhbiA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuPihUZXh0U3BhbiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuPikodiA9PiBuZXcgVGV4dExpbmVTcGFuKCkuQ29weUZyb208VGV4dExpbmVTcGFuPih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5PigoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU2VhcmNoUmVzdWx0IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFRleHRMaW5lU3BhblJlc3VsdCBtX1RleHRMaW5lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgRGVmaW5pdGlvblN5bWJvbCBtX0RlZmluaXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFJlc3VsdCgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU2VhcmNoUmVzdWx0KENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U2VhcmNoUmVzdWx0Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRleHQgc3BhbiBmb3IgYSB0ZXh0IHJlc3VsdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0IENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdC5UZXh0TGluZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5UZXh0TGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0ZXh0IHNwYW4gZm9yIGEgdGV4dCByZXN1bHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRleHRMaW5lU3BhblJlc3VsdCBUZXh0TGluZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1RleHRMaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVGV4dExpbmUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWZpbml0aW9uIG9mIHRoZSBzZWFyY2ggcmVzdWx0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JRGVmaW5pdGlvblN5bWJvbCBDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQuRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmluaXRpb24gb2YgdGhlIHNlYXJjaCByZXN1bHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIERlZmluaXRpb25TeW1ib2wgRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlZmluaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTZWFyY2hSZXN1bHQge1xyXG4gICAgICAgICAgICB0aGlzLm1fVGV4dExpbmUgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3BhblJlc3VsdCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3BhblJlc3VsdD4oVGV4dExpbmUsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuUmVzdWx0LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3BhblJlc3VsdD4pKHYgPT4gbmV3IFRleHRMaW5lU3BhblJlc3VsdCgpLkNvcHlGcm9tPFRleHRMaW5lU3BhblJlc3VsdD4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9uID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4oRGVmaW5pdGlvbiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KSh2ID0+IG5ldyBEZWZpbml0aW9uU3ltYm9sKCkuQ29weUZyb208RGVmaW5pdGlvblN5bWJvbD4odikpKTs7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklJbmRleCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgSW5kZXggOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5TZGsuU2VhcmNoLklJbmRleCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEluZGV4KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBJbmRleChDb2RleC5TZGsuU2VhcmNoLklJbmRleCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208SW5kZXg+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5TZGsuU2VhcmNoLklJbmRleCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEluZGV4IHtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5uYW1lc3BhY2UgQ29kZXguRnJhbWV3b3JrLlR5cGVzIHtcclxuICAgIHVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbiAgICB1c2luZyBDb21taXQgPSBDb2RleC5PYmplY3RNb2RlbC5Db21taXQ7XHJcbiAgICB1c2luZyBDb21taXRDaGFuZ2VkRmlsZSA9IENvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdENoYW5nZWRGaWxlO1xyXG4gICAgdXNpbmcgQ29tbWl0RmlsZUxpbmsgPSBDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaztcclxuICAgIHVzaW5nIEJyYW5jaCA9IENvZGV4Lk9iamVjdE1vZGVsLkJyYW5jaDtcclxuICAgIHVzaW5nIEJvdW5kU291cmNlRmlsZSA9IENvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlRmlsZTtcclxuICAgIHVzaW5nIEJvdW5kU291cmNlSW5mbyA9IENvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlSW5mbztcclxuICAgIHVzaW5nIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyA9IENvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbztcclxuICAgIHVzaW5nIFNvdXJjZUZpbGVJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZUluZm87XHJcbiAgICB1c2luZyBFbmNvZGluZ0Rlc2NyaXB0aW9uID0gQ29kZXguT2JqZWN0TW9kZWwuRW5jb2RpbmdEZXNjcmlwdGlvbjtcclxuICAgIHVzaW5nIFNvdXJjZUZpbGUgPSBDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlO1xyXG4gICAgdXNpbmcgT3V0bGluaW5nUmVnaW9uID0gQ29kZXguT2JqZWN0TW9kZWwuT3V0bGluaW5nUmVnaW9uO1xyXG4gICAgdXNpbmcgRGVmaW5pdGlvblNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3BhbjtcclxuICAgIHVzaW5nIFBhcmFtZXRlckRlZmluaXRpb25TcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRGVmaW5pdGlvblNwYW47XHJcbiAgICB1c2luZyBSZWZlcmVuY2VTcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3BhbjtcclxuICAgIHVzaW5nIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJSZWZlcmVuY2VTcGFuO1xyXG4gICAgdXNpbmcgQ2xhc3NpZmljYXRpb25TcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuQ2xhc3NpZmljYXRpb25TcGFuO1xyXG4gICAgdXNpbmcgU3ltYm9sU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbFNwYW47XHJcbiAgICB1c2luZyBUZXh0TGluZVNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW47XHJcbiAgICB1c2luZyBMaW5lU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuO1xyXG4gICAgdXNpbmcgU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLlNwYW47XHJcbiAgICB1c2luZyBDb2RlUmV2aWV3ID0gQ29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlldztcclxuICAgIHVzaW5nIENvZGVSZXZpZXdJdGVyYXRpb24gPSBDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3SXRlcmF0aW9uO1xyXG4gICAgdXNpbmcgQ29kZVJldmlld2VySW5mbyA9IENvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdlckluZm87XHJcbiAgICB1c2luZyBDb2RlUmV2aWV3RmlsZSA9IENvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdGaWxlO1xyXG4gICAgdXNpbmcgQ29kZVJldmlld0NvbW1lbnRUaHJlYWQgPSBDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3Q29tbWVudFRocmVhZDtcclxuICAgIHVzaW5nIENvZGVSZXZpZXdDb21tZW50ID0gQ29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0NvbW1lbnQ7XHJcbiAgICB1c2luZyBMYW5ndWFnZUluZm8gPSBDb2RleC5PYmplY3RNb2RlbC5MYW5ndWFnZUluZm87XHJcbiAgICB1c2luZyBDbGFzc2lmaWNhdGlvblN0eWxlID0gQ29kZXguT2JqZWN0TW9kZWwuQ2xhc3NpZmljYXRpb25TdHlsZTtcclxuICAgIHVzaW5nIEFuYWx5emVkUHJvamVjdCA9IENvZGV4Lk9iamVjdE1vZGVsLkFuYWx5emVkUHJvamVjdDtcclxuICAgIHVzaW5nIFJlZmVyZW5jZWRQcm9qZWN0ID0gQ29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3Q7XHJcbiAgICB1c2luZyBQcm9qZWN0RmlsZUxpbmsgPSBDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0RmlsZUxpbms7XHJcbiAgICB1c2luZyBEb2N1bWVudGF0aW9uSW5mbyA9IENvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25JbmZvO1xyXG4gICAgdXNpbmcgUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiA9IENvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRvY3VtZW50YXRpb247XHJcbiAgICB1c2luZyBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24gPSBDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb247XHJcbiAgICB1c2luZyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sID0gQ29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbDtcclxuICAgIHVzaW5nIFByb3BlcnR5U2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5Qcm9wZXJ0eVNlYXJjaE1vZGVsO1xyXG4gICAgdXNpbmcgUHJvcGVydHlNYXAgPSBDb2RleC5PYmplY3RNb2RlbC5Qcm9wZXJ0eU1hcDtcclxuICAgIHVzaW5nIFJlcG9zaXRvcnkgPSBDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5O1xyXG4gICAgdXNpbmcgUmVwb3NpdG9yeVJlZmVyZW5jZSA9IENvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnlSZWZlcmVuY2U7XHJcbiAgICB1c2luZyBTZWFyY2hFbnRpdHkgPSBDb2RleC5PYmplY3RNb2RlbC5TZWFyY2hFbnRpdHk7XHJcbiAgICB1c2luZyBSZXBvU2NvcGVFbnRpdHkgPSBDb2RleC5PYmplY3RNb2RlbC5SZXBvU2NvcGVFbnRpdHk7XHJcbiAgICB1c2luZyBDb21taXRTY29wZUVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdFNjb3BlRW50aXR5O1xyXG4gICAgdXNpbmcgUHJvamVjdFNjb3BlRW50aXR5ID0gQ29kZXguT2JqZWN0TW9kZWwuUHJvamVjdFNjb3BlRW50aXR5O1xyXG4gICAgdXNpbmcgUmVwb0ZpbGVTY29wZUVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLlJlcG9GaWxlU2NvcGVFbnRpdHk7XHJcbiAgICB1c2luZyBQcm9qZWN0RmlsZVNjb3BlRW50aXR5ID0gQ29kZXguT2JqZWN0TW9kZWwuUHJvamVjdEZpbGVTY29wZUVudGl0eTtcclxuICAgIHVzaW5nIFJlZ2lzdGVyZWRFbnRpdHkgPSBDb2RleC5PYmplY3RNb2RlbC5SZWdpc3RlcmVkRW50aXR5O1xyXG4gICAgdXNpbmcgU3RvcmVkRmlsdGVyID0gQ29kZXguT2JqZWN0TW9kZWwuU3RvcmVkRmlsdGVyO1xyXG4gICAgdXNpbmcgRGVmaW5pdGlvblNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblNlYXJjaE1vZGVsO1xyXG4gICAgdXNpbmcgTGFuZ3VhZ2VTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLkxhbmd1YWdlU2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBSZWZlcmVuY2VTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVNlYXJjaE1vZGVsO1xyXG4gICAgdXNpbmcgU291cmNlU2VhcmNoTW9kZWxCYXNlID0gQ29kZXguT2JqZWN0TW9kZWwuU291cmNlU2VhcmNoTW9kZWxCYXNlO1xyXG4gICAgdXNpbmcgQm91bmRTb3VyY2VTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlU2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBUZXh0U291cmNlU2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5UZXh0U291cmNlU2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBSZXBvc2l0b3J5U2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5U2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBQcm9qZWN0U2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0U2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBDb21taXRTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdFNlYXJjaE1vZGVsO1xyXG4gICAgdXNpbmcgQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVzU2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBGaWxlU3RhdGlzdGljcyA9IENvZGV4Lk9iamVjdE1vZGVsLkZpbGVTdGF0aXN0aWNzO1xyXG4gICAgdXNpbmcgUmVwb3NpdG9yeVN0b3JlSW5mbyA9IENvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnlTdG9yZUluZm87XHJcbiAgICB1c2luZyBDb21taXRGaWxlc0RpcmVjdG9yeSA9IENvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVzRGlyZWN0b3J5O1xyXG4gICAgdXNpbmcgU3RvcmVkQm91bmRTb3VyY2VGaWxlID0gQ29kZXguT2JqZWN0TW9kZWwuU3RvcmVkQm91bmRTb3VyY2VGaWxlO1xyXG4gICAgdXNpbmcgRGVmaW5pdGlvblN5bWJvbCA9IENvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w7XHJcbiAgICB1c2luZyBSZWZlcmVuY2VTeW1ib2wgPSBDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTeW1ib2w7XHJcbiAgICB1c2luZyBTeW1ib2wgPSBDb2RleC5PYmplY3RNb2RlbC5TeW1ib2w7XHJcbiAgICB1c2luZyBUZXh0TGluZVNwYW5SZXN1bHQgPSBDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW5SZXN1bHQ7XHJcbiAgICB1c2luZyBTZWFyY2hSZXN1bHQgPSBDb2RleC5PYmplY3RNb2RlbC5TZWFyY2hSZXN1bHQ7XHJcbiAgICB1c2luZyBJbmRleCA9IENvZGV4Lk9iamVjdE1vZGVsLkluZGV4O1xyXG4gICAgXHJcbiAgICBcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGludGVyZmFjZSBJU3RvcmUge1xyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5PYmplY3RNb2RlbFxyXG57XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVmaW5lcyBDb2RleCBnbHlwaHNcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgZW51bSBHbHlwaFxyXG4gICAge1xyXG4gICAgICAgIFVua25vd24gPSAtMSxcclxuICAgICAgICBBc3NlbWJseSxcclxuXHJcbiAgICAgICAgQmFzaWNGaWxlLFxyXG4gICAgICAgIEJhc2ljUHJvamVjdCxcclxuXHJcbiAgICAgICAgQ2xhc3NQdWJsaWMsXHJcbiAgICAgICAgQ2xhc3NQcm90ZWN0ZWQsXHJcbiAgICAgICAgQ2xhc3NQcml2YXRlLFxyXG4gICAgICAgIENsYXNzSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIENTaGFycEZpbGUsXHJcbiAgICAgICAgQ1NoYXJwUHJvamVjdCxcclxuXHJcbiAgICAgICAgQ29uc3RhbnRQdWJsaWMsXHJcbiAgICAgICAgQ29uc3RhbnRQcm90ZWN0ZWQsXHJcbiAgICAgICAgQ29uc3RhbnRQcml2YXRlLFxyXG4gICAgICAgIENvbnN0YW50SW50ZXJuYWwsXHJcblxyXG4gICAgICAgIERlbGVnYXRlUHVibGljLFxyXG4gICAgICAgIERlbGVnYXRlUHJvdGVjdGVkLFxyXG4gICAgICAgIERlbGVnYXRlUHJpdmF0ZSxcclxuICAgICAgICBEZWxlZ2F0ZUludGVybmFsLFxyXG5cclxuICAgICAgICBFbnVtUHVibGljLFxyXG4gICAgICAgIEVudW1Qcm90ZWN0ZWQsXHJcbiAgICAgICAgRW51bVByaXZhdGUsXHJcbiAgICAgICAgRW51bUludGVybmFsLFxyXG5cclxuICAgICAgICBFbnVtTWVtYmVyLFxyXG5cclxuICAgICAgICBFcnJvcixcclxuXHJcbiAgICAgICAgRXZlbnRQdWJsaWMsXHJcbiAgICAgICAgRXZlbnRQcm90ZWN0ZWQsXHJcbiAgICAgICAgRXZlbnRQcml2YXRlLFxyXG4gICAgICAgIEV2ZW50SW50ZXJuYWwsXHJcblxyXG4gICAgICAgIEV4dGVuc2lvbk1ldGhvZFB1YmxpYyxcclxuICAgICAgICBFeHRlbnNpb25NZXRob2RQcm90ZWN0ZWQsXHJcbiAgICAgICAgRXh0ZW5zaW9uTWV0aG9kUHJpdmF0ZSxcclxuICAgICAgICBFeHRlbnNpb25NZXRob2RJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgRmllbGRQdWJsaWMsXHJcbiAgICAgICAgRmllbGRQcm90ZWN0ZWQsXHJcbiAgICAgICAgRmllbGRQcml2YXRlLFxyXG4gICAgICAgIEZpZWxkSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIEludGVyZmFjZVB1YmxpYyxcclxuICAgICAgICBJbnRlcmZhY2VQcm90ZWN0ZWQsXHJcbiAgICAgICAgSW50ZXJmYWNlUHJpdmF0ZSxcclxuICAgICAgICBJbnRlcmZhY2VJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgSW50cmluc2ljLFxyXG5cclxuICAgICAgICBLZXl3b3JkLFxyXG5cclxuICAgICAgICBMYWJlbCxcclxuXHJcbiAgICAgICAgTG9jYWwsXHJcblxyXG4gICAgICAgIE5hbWVzcGFjZSxcclxuXHJcbiAgICAgICAgTWV0aG9kUHVibGljLFxyXG4gICAgICAgIE1ldGhvZFByb3RlY3RlZCxcclxuICAgICAgICBNZXRob2RQcml2YXRlLFxyXG4gICAgICAgIE1ldGhvZEludGVybmFsLFxyXG5cclxuICAgICAgICBNb2R1bGVQdWJsaWMsXHJcbiAgICAgICAgTW9kdWxlUHJvdGVjdGVkLFxyXG4gICAgICAgIE1vZHVsZVByaXZhdGUsXHJcbiAgICAgICAgTW9kdWxlSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIE9wZW5Gb2xkZXIsXHJcblxyXG4gICAgICAgIE9wZXJhdG9yLFxyXG5cclxuICAgICAgICBQYXJhbWV0ZXIsXHJcblxyXG4gICAgICAgIFByb3BlcnR5UHVibGljLFxyXG4gICAgICAgIFByb3BlcnR5UHJvdGVjdGVkLFxyXG4gICAgICAgIFByb3BlcnR5UHJpdmF0ZSxcclxuICAgICAgICBQcm9wZXJ0eUludGVybmFsLFxyXG5cclxuICAgICAgICBSYW5nZVZhcmlhYmxlLFxyXG5cclxuICAgICAgICBSZWZlcmVuY2UsXHJcblxyXG4gICAgICAgIFN0cnVjdHVyZVB1YmxpYyxcclxuICAgICAgICBTdHJ1Y3R1cmVQcm90ZWN0ZWQsXHJcbiAgICAgICAgU3RydWN0dXJlUHJpdmF0ZSxcclxuICAgICAgICBTdHJ1Y3R1cmVJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgVHlwZVBhcmFtZXRlcixcclxuXHJcbiAgICAgICAgVXAsXHJcbiAgICAgICAgRG93bixcclxuICAgICAgICBMZWZ0LFxyXG4gICAgICAgIFJpZ2h0LFxyXG4gICAgICAgIERvdCxcclxuXHJcbiAgICAgICAgU25pcHBldFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgR2x5cGhVdGlsaXRpZXNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHVzaG9ydCBHZXRHbHlwaE51bWJlcih0aGlzIEdseXBoIGdseXBoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXNob3J0IHJlc3VsdCA9ICh1c2hvcnQpKCh1c2hvcnQpR2V0U3RhbmRhcmRHbHlwaEdyb3VwKGdseXBoKSArICh1c2hvcnQpR2V0U3RhbmRhcmRHbHlwaEl0ZW0oZ2x5cGgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFN0YW5kYXJkR2x5cGhHcm91cCBHZXRTdGFuZGFyZEdseXBoR3JvdXAoR2x5cGggZ2x5cGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGdseXBoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkFzc2VtYmx5OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhBc3NlbWJseTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5DbGFzc1Byb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ2xhc3NQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5DbGFzc0ludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cENsYXNzO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNvbnN0YW50UHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Db25zdGFudFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNvbnN0YW50SW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwQ29uc3RhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5DU2hhcnBGaWxlOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhDU2hhcnBGaWxlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRlbGVnYXRlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5EZWxlZ2F0ZVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRlbGVnYXRlSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwRGVsZWdhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FbnVtUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FbnVtUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FbnVtUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRW51bUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEVudW07XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FbnVtTWVtYmVyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEVudW1NZW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FcnJvcjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBFcnJvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV4dGVuc2lvbk1ldGhvZFB1YmxpYzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoRXh0ZW5zaW9uTWV0aG9kO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXh0ZW5zaW9uTWV0aG9kUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhFeHRlbnNpb25NZXRob2RQcm90ZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FeHRlbnNpb25NZXRob2RQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhFeHRlbnNpb25NZXRob2RQcml2YXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXh0ZW5zaW9uTWV0aG9kSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEV4dGVuc2lvbk1ldGhvZEludGVybmFsO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXZlbnRQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV2ZW50UHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV2ZW50SW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZFB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRmllbGRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkZpZWxkUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRmllbGRJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBGaWVsZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguSW50ZXJmYWNlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5JbnRlcmZhY2VQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5JbnRlcmZhY2VJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBJbnRlcmZhY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5JbnRyaW5zaWM6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwSW50cmluc2ljO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguS2V5d29yZDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoS2V5d29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkxhYmVsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEludHJpbnNpYztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkxvY2FsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cFZhcmlhYmxlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTmFtZXNwYWNlOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cE5hbWVzcGFjZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1ldGhvZFB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5NZXRob2RQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5NZXRob2RJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBNZXRob2Q7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1vZHVsZVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTW9kdWxlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTW9kdWxlSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwTW9kdWxlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguT3BlbkZvbGRlcjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoT3BlbkZvbGRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk9wZXJhdG9yOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cE9wZXJhdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUGFyYW1ldGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cFZhcmlhYmxlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlByb3BlcnR5UHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Qcm9wZXJ0eVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlByb3BlcnR5SW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwUHJvcGVydHk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5SYW5nZVZhcmlhYmxlOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cFZhcmlhYmxlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUmVmZXJlbmNlOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhSZWZlcmVuY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlN0cnVjdHVyZVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguU3RydWN0dXJlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguU3RydWN0dXJlSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwU3RydWN0O1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguVHlwZVBhcmFtZXRlcjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBUeXBlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguVXA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRvd246XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkxlZnQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Eb3Q6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEFycm93O1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEFyZ3VtZW50RXhjZXB0aW9uKFwiZ2x5cGhcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFN0YW5kYXJkR2x5cGhJdGVtIEdldFN0YW5kYXJkR2x5cGhJdGVtKEdseXBoIGljb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGljb24pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ2xhc3NQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNvbnN0YW50UHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5EZWxlZ2F0ZVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRW51bVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXZlbnRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkZpZWxkUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5JbnRlcmZhY2VQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1ldGhvZFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTW9kdWxlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Qcm9wZXJ0eVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguU3RydWN0dXJlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoSXRlbS5HbHlwaEl0ZW1Qcm90ZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5DbGFzc1ByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNvbnN0YW50UHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FbnVtUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXZlbnRQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1ldGhvZFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1vZHVsZVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlByb3BlcnR5UHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguU3RydWN0dXJlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEl0ZW0uR2x5cGhJdGVtUHJpdmF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNvbnN0YW50SW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRlbGVnYXRlSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1JbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXZlbnRJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRmllbGRJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguSW50ZXJmYWNlSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1ldGhvZEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguU3RydWN0dXJlSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhJdGVtLkdseXBoSXRlbUZyaWVuZDtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgYW55IG92ZXJsYXlzXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhJdGVtLkdseXBoSXRlbVB1YmxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgIC8vICAgICBEZXNjcmliZXMgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBnbHlwaHMgdGhhdCBjYW4gYmUgZGlzcGxheWVkIGluIHRoZSBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIGNvbXBsZXRpb24gdG9vbCBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICBwdWJsaWMgZW51bSBTdGFuZGFyZEdseXBoR3JvdXBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY2xhc3Nlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cENsYXNzID0gMCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBjb25zdGFudHMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBDb25zdGFudCA9IDYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZGVsZWdhdGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwRGVsZWdhdGUgPSAxMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBlbnVtZXJhdGlvbnMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBFbnVtID0gMTgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZW51bWVyYXRpb24gbWVtYmVycy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEVudW1NZW1iZXIgPSAyNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBldmVudHMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBFdmVudCA9IDMwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGV4Y2VwdGlvbnMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBFeGNlcHRpb24gPSAzNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBmaWVsZHMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBGaWVsZCA9IDQyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGludGVyZmFjZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBJbnRlcmZhY2UgPSA0OCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBtYWNyb3MuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBNYWNybyA9IDU0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG1hcHMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBNYXAgPSA2MCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBtYXAgaXRlbXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBNYXBJdGVtID0gNjYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgbWV0aG9kcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE1ldGhvZCA9IDcyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG92ZXJsb2Fkcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE92ZXJsb2FkID0gNzgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgbW9kdWxlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE1vZHVsZSA9IDg0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG5hbWVzcGFjZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBOYW1lc3BhY2UgPSA5MCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBvcGVyYXRvcnMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBPcGVyYXRvciA9IDk2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBQcm9wZXJ0eSA9IDEwMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBzdHJ1Y3R1cmVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwU3RydWN0ID0gMTA4LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHRlbXBsYXRlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFRlbXBsYXRlID0gMTE0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHR5cGVkZWZzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwVHlwZWRlZiA9IDEyMCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB0eXBlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFR5cGUgPSAxMjYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgdW5pb25zLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwVW5pb24gPSAxMzIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgdmFyaWFibGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwVmFyaWFibGUgPSAxMzgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgdmFsdWUgdHlwZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBWYWx1ZVR5cGUgPSAxNDQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgaW50cmluc2ljIHN5bWJvbHMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBJbnRyaW5zaWMgPSAxNTAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgSiMgbWV0aG9kcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEpTaGFycE1ldGhvZCA9IDE1NixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBKIyBmaWVsZHMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBKU2hhcnBGaWVsZCA9IDE2MixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBKIyBjbGFzc2VzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwSlNoYXJwQ2xhc3MgPSAxNjgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgSiMgbmFtZXNwYWNlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEpTaGFycE5hbWVzcGFjZSA9IDE3NCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBKIyBpbnRlcmZhY2VzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwSlNoYXJwSW50ZXJmYWNlID0gMTgwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGVycm9ycy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEVycm9yID0gMTg2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEJTQyBmaWxlcy5cclxuICAgICAgICAgICAgR2x5cGhCc2NGaWxlID0gMTkxLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGFzc2VtYmxpZXMuXHJcbiAgICAgICAgICAgIEdseXBoQXNzZW1ibHkgPSAxOTIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgbGlicmFyaWVzLlxyXG4gICAgICAgICAgICBHbHlwaExpYnJhcnkgPSAxOTMsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgVkIgcHJvamVjdHMuXHJcbiAgICAgICAgICAgIEdseXBoVkJQcm9qZWN0ID0gMTk0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEMjIHByb2plY3RzLlxyXG4gICAgICAgICAgICBHbHlwaENvb2xQcm9qZWN0ID0gMTk2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEMrKyBwcm9qZWN0cy5cclxuICAgICAgICAgICAgR2x5cGhDcHBQcm9qZWN0ID0gMTk5LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGRpYWxvZyBpZGVudGlmaWVycy5cclxuICAgICAgICAgICAgR2x5cGhEaWFsb2dJZCA9IDIwMCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBvcGVuIGZvbGRlcnMuXHJcbiAgICAgICAgICAgIEdseXBoT3BlbkZvbGRlciA9IDIwMSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBjbG9zZWQgZm9sZGVycy5cclxuICAgICAgICAgICAgR2x5cGhDbG9zZWRGb2xkZXIgPSAyMDIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgYXJyb3cgc3ltYm9scy5cclxuICAgICAgICAgICAgR2x5cGhBcnJvdyA9IDIwMyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBDIyBmaWxlcy5cclxuICAgICAgICAgICAgR2x5cGhDU2hhcnBGaWxlID0gMjA0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEMjIGV4cGFuc2lvbnMuXHJcbiAgICAgICAgICAgIEdseXBoQ1NoYXJwRXhwYW5zaW9uID0gMjA1LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGtleXdvcmRzLlxyXG4gICAgICAgICAgICBHbHlwaEtleXdvcmQgPSAyMDYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgICAgIEdseXBoSW5mb3JtYXRpb24gPSAyMDcsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgcmVmZXJlbmNlcy5cclxuICAgICAgICAgICAgR2x5cGhSZWZlcmVuY2UgPSAyMDgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgcmVjdXJzaW9uLlxyXG4gICAgICAgICAgICBHbHlwaFJlY3Vyc2lvbiA9IDIwOSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBYTUwgaXRlbXMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sSXRlbSA9IDIxMCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBKIyBwcm9qZWN0cy5cclxuICAgICAgICAgICAgR2x5cGhKU2hhcnBQcm9qZWN0ID0gMjExLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIGRvY3VtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhKU2hhcnBEb2N1bWVudCA9IDIxMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBmb3J3YXJkZWQgdHlwZXMuXHJcbiAgICAgICAgICAgIEdseXBoRm9yd2FyZFR5cGUgPSAyMTMsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY2FsbGVycyBncmFwaHMuXHJcbiAgICAgICAgICAgIEdseXBoQ2FsbGVyc0dyYXBoID0gMjE0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGNhbGwgZ3JhcGhzLlxyXG4gICAgICAgICAgICBHbHlwaENhbGxHcmFwaCA9IDIxNSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBidWlsZCB3YXJuaW5ncy5cclxuICAgICAgICAgICAgR2x5cGhXYXJuaW5nID0gMjE2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHNvbWV0aGluZyB0aGF0IG1heSBiZSBhIHJlZmVyZW5jZS5cclxuICAgICAgICAgICAgR2x5cGhNYXliZVJlZmVyZW5jZSA9IDIxNyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBzb21ldGhpbmcgdGhhdCBtYXkgYmUgYSBjYWxsZXIuXHJcbiAgICAgICAgICAgIEdseXBoTWF5YmVDYWxsZXIgPSAyMTgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Igc29tZXRoaW5nIHRoYXQgbWF5IGJlIGEgY2FsbC5cclxuICAgICAgICAgICAgR2x5cGhNYXliZUNhbGwgPSAyMTksXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZXh0ZW5zaW9uIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoRXh0ZW5zaW9uTWV0aG9kID0gMjIwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGludGVybmFsIGV4dGVuc2lvbiBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEV4dGVuc2lvbk1ldGhvZEludGVybmFsID0gMjIxLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGZyaWVuZCBleHRlbnNpb24gbWV0aG9kcy5cclxuICAgICAgICAgICAgR2x5cGhFeHRlbnNpb25NZXRob2RGcmllbmQgPSAyMjIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgcHJvdGVjdGVkIGV4dGVuc2lvbiBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEV4dGVuc2lvbk1ldGhvZFByb3RlY3RlZCA9IDIyMyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBwcml2YXRlIGV4dGVuc2lvbiBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEV4dGVuc2lvbk1ldGhvZFByaXZhdGUgPSAyMjQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZXh0ZW5zaW9uIG1ldGhvZCBzaG9ydGN1dHMuXHJcbiAgICAgICAgICAgIEdseXBoRXh0ZW5zaW9uTWV0aG9kU2hvcnRjdXQgPSAyMjUsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgWE1MIGF0dHJpYnV0ZXMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sQXR0cmlidXRlID0gMjI2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGNoaWxkIFhNTCBlbGVtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhYbWxDaGlsZCA9IDIyNyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBkZXNjZW5kYW50IFhNTCBlbGVtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhYbWxEZXNjZW5kYW50ID0gMjI4LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIFhNTCBuYW1lc3BhY2VzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbE5hbWVzcGFjZSA9IDIyOSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIHdpdGggYSBxdWVzdGlvbiBtYXJrIGZvciBYTUwgYXR0cmlidXRlcy5cclxuICAgICAgICAgICAgR2x5cGhYbWxBdHRyaWJ1dGVRdWVzdGlvbiA9IDIzMCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIHdpdGggYSBjaGVjayBtYXJrIGZvciBYTUwgYXR0cmlidXRlcy5cclxuICAgICAgICAgICAgR2x5cGhYbWxBdHRyaWJ1dGVDaGVjayA9IDIzMSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIHdpdGggYSBxdWVzdGlvbiBtYXJrIGZvciBYTUwgY2hpbGQgZWxlbWVudHMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sQ2hpbGRRdWVzdGlvbiA9IDIzMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIHdpdGggYSBjaGVjayBtYXJrIGZvciBYTUwgY2hpbGQgZWxlbWVudHMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sQ2hpbGRDaGVjayA9IDIzMyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIHdpdGggYSBxdWVzdGlvbiBtYXJrIGZvciBYTUwgZGVzY2VuZGFudCBlbGVtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhYbWxEZXNjZW5kYW50UXVlc3Rpb24gPSAyMzQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyB3aXRoIGEgY2hlY2sgbWFyayBmb3IgWE1MIGRlc2NlbmRhbnQgZWxlbWVudHMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sRGVzY2VuZGFudENoZWNrID0gMjM1LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGNvbXBsZXRpb24gd2FybmluZ3NcclxuICAgICAgICAgICAgR2x5cGhDb21wbGV0aW9uV2FybmluZyA9IDIzNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB1bmtub3duIHR5cGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwVW5rbm93biA9IDIzN1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgIC8vICAgICBEZXNjcmliZXMgaWNvbnMgb3IgZ2x5cGhzIHRoYXQgYXJlIHVzZWQgaW4gc3RhdGVtZW50IGNvbXBsZXRpb24uXHJcbiAgICAgICAgcHVibGljIGVudW0gU3RhbmRhcmRHbHlwaEl0ZW1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgYSBwdWJsaWMgc3ltYm9sLlxyXG4gICAgICAgICAgICBHbHlwaEl0ZW1QdWJsaWMgPSAwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGFuIGludGVybmFsIHN5bWJvbC5cclxuICAgICAgICAgICAgR2x5cGhJdGVtSW50ZXJuYWwgPSAxLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGEgZnJpZW5kIHN5bWJvbC5cclxuICAgICAgICAgICAgR2x5cGhJdGVtRnJpZW5kID0gMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhIHByb3RlY3RlZCBzeW1ib2wuXHJcbiAgICAgICAgICAgIEdseXBoSXRlbVByb3RlY3RlZCA9IDMsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgYSBwcml2YXRlIHN5bWJvbC5cclxuICAgICAgICAgICAgR2x5cGhJdGVtUHJpdmF0ZSA9IDQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgYSBzaG9ydGN1dCBzeW1ib2wuXHJcbiAgICAgICAgICAgIEdseXBoSXRlbVNob3J0Y3V0ID0gNSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhIHN5bWJvbCB0aGF0IGhhcyBhbGwgKG9yIG5vbmUpIG9mIHRoZSBzdGFuZGFyZCBhdHRyaWJ1dGVzLlxyXG4gICAgICAgICAgICBUb3RhbEdseXBoSXRlbXMgPSA2XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIE5ld3RvbnNvZnQuSnNvbjtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIENvbXBhdGliaWxpdHlFeHRlbnNpb25zXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdHJpbmcgVG9Mb3dlckludmFyaWFudCh0aGlzIHN0cmluZyB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5Ub0xvd2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguT2JqZWN0TW9kZWxcclxue1xyXG4gICAgcGFydGlhbCBzdHJ1Y3QgU3ltYm9sSWRcclxuICAgIHtcclxuICAgICAgICBbSnNvbkNvbnN0cnVjdG9yXVxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2xJZChzdHJpbmcgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguU2RrLlNlYXJjaFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBpbnRlcmZhY2UgSUluZGV4XHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBIaWdoIGxldmVsIHF1ZXJ5IG9wZXJhdGlvbnMgZm9yIGluZGV4ZWQgY29kZVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBwYXJ0aWFsIGNsYXNzIEluZGV4PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEluZGV4UXVlcnk8VD4gQ3JlYXRlUXVlcnkoKTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IElQcmVmaXhQcm9wZXJ0eTxUPiBDcmVhdGVQcmVmaXhQcm9wZXJ0eSgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSVRlcm1Qcm9wZXJ0eTxUPiBDcmVhdGVUZXJtUHJvcGVydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgSW5kZXhRdWVyeTxUPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBJbmRleEZpbHRlcjxUPiBGaWx0ZXIgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBtYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHRvIHJldHVyblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIGludCBNYXhSZXN1bHRzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxUPj4gRXhlY3V0ZUFzeW5jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIFByZWZpeEZ1bGxOYW1lSW5kZXhQcm9wZXJ0eTxUPiA6IFRlcm1JbmRleFByb3BlcnR5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEluZGV4RmlsdGVyPFQ+IFByZWZpeEZ1bGxOYW1lKHN0cmluZyBwcmVmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBQcmVmaXhJbmRleFByb3BlcnR5PFQ+IDogVGVybUluZGV4UHJvcGVydHk8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSW5kZXhGaWx0ZXI8VD4gUHJlZml4KHN0cmluZyBwcmVmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBOb3JtYWxpemVkS2V5d29yZEluZGV4UHJvcGVydHk8VD4gOiBUZXJtSW5kZXhQcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBGdWxsVGV4dEluZGV4UHJvcGVydHk8VD4gOiBUZXJtSW5kZXhQcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJbmRleEZpbHRlcjxUPiBDb250YWlucyhzdHJpbmcgcGhyYXNlKTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEluZGV4RmlsdGVyPFQ+IENvbnRhaW5zQWxsKHN0cmluZ1tdIHRlcm1zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBTb3J0d29yZCBpcyBub3JtYWxseSBhbHNvIGEgbm9ybWFsaXplZCBrZXl3b3JkLiBJcyB0aGlzIGFsd2F5cyB0aGUgY2FzZT9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBTb3J0d29yZEluZGV4UHJvcGVydHk8VD4gOiBUZXJtSW5kZXhQcm9wZXJ0eTxUPlxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgVGVybUluZGV4UHJvcGVydHk8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSW5kZXhGaWx0ZXI8VD4gTWF0Y2g8VFZhbHVlPihUVmFsdWUgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVByZWZpeFByb3BlcnR5PFQ+IDogSVRlcm1Qcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgICAgIEluZGV4RmlsdGVyPFQ+IFByZWZpeChzdHJpbmcgcHJlZml4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElUZXJtUHJvcGVydHk8VD5cclxuICAgIHtcclxuICAgICAgICBJbmRleEZpbHRlcjxUPiBNYXRjaDxUVmFsdWU+KFRWYWx1ZSB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudW0gQmluYXJ5T3BlcmF0b3JcclxuICAgIHtcclxuICAgICAgICBBbmQsXHJcbiAgICAgICAgT3IsXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEJpbmFyeUZpbHRlcjxUPiA6IEluZGV4RmlsdGVyPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IEJpbmFyeU9wZXJhdG9yIE9wZXJhdG9yO1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBJbmRleEZpbHRlcjxUPiBMZWZ0O1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBJbmRleEZpbHRlcjxUPiBSaWdodDtcclxuXHJcbiAgICAgICAgcHVibGljIEJpbmFyeUZpbHRlcihCaW5hcnlPcGVyYXRvciBvcCwgSW5kZXhGaWx0ZXI8VD4gbGVmdCwgSW5kZXhGaWx0ZXI8VD4gcmlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcGVyYXRvciA9IG9wO1xyXG4gICAgICAgICAgICBMZWZ0ID0gbGVmdDtcclxuICAgICAgICAgICAgUmlnaHQgPSByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEluZGV4RmlsdGVyPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJbmRleEZpbHRlcjxUPiBvcGVyYXRvciAmKEluZGV4RmlsdGVyPFQ+IGxlZnQsIEluZGV4RmlsdGVyPFQ+IHJpZ2h0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaW5hcnlGaWx0ZXI8VD4oQmluYXJ5T3BlcmF0b3IuQW5kLCBsZWZ0LCByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEluZGV4RmlsdGVyPFQ+IG9wZXJhdG9yIHwoSW5kZXhGaWx0ZXI8VD4gbGVmdCwgSW5kZXhGaWx0ZXI8VD4gcmlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpbmFyeUZpbHRlcjxUPihCaW5hcnlPcGVyYXRvci5PciwgbGVmdCwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElJbmRleFF1ZXJ5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgSUluZGV4UXVlcnlGaWx0ZXI8VD4gRmlsdGVyIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbWF4aW11bSBudW1iZXIgb2YgcmVzdWx0cyB0byByZXR1cm5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIGludCBNYXhSZXN1bHRzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgVGFzazxJbmRleFF1ZXJ5UmVzcG9uc2U8VD4+IEV4ZWN1dGVBc3luYygpO1xyXG5cclxuICAgICAgICB2b2lkIEV4Y2x1ZGUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJSW5kZXhRdWVyeUZpbHRlcjxUPlxyXG4gICAge1xyXG4gICAgICAgIHZvaWQgRXhjbHVkZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5TZGsuU2VhcmNoXHJcbntcclxuICAgIC8vICtUT0RPOiBHZW5lcmF0ZSBBU1AuTmV0IGVuZHBvaW50IHdoaWNoIGhhbmRsZXMgYWxsIHRoZXNlIGNhbGxzLiBQb3RlbnRpYWxseSBhbHNvIGltcGxlbWVudFxyXG4gICAgLy8gY2FsbGVyIChpLmUuIFdlYkFwaUNvZGV4IDogSUNvZGV4KVxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEhpZ2ggbGV2ZWwgb3BlcmF0aW9ucyBmb3IgY29kZXggXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGludGVyZmFjZSBJQ29kZXhcclxuICAgIHtcclxuICAgICAgICBUYXNrPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SVNlYXJjaFJlc3VsdD4+IFNlYXJjaEFzeW5jKFNlYXJjaEFyZ3VtZW50cyBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICBUYXNrPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SVJlZmVyZW5jZVNlYXJjaE1vZGVsPj4gRmluZEFsbFJlZmVyZW5jZXNBc3luYyhGaW5kQWxsUmVmZXJlbmNlc0FyZ3VtZW50cyBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEZpbmQgZGVmaW5pdGlvbiBmb3IgYSBzeW1ib2xcclxuICAgICAgICAvLy8gVXNhZ2U6IERvY3VtZW50YXRpb24gaG92ZXIgdG9vbHRpcFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElEZWZpbml0aW9uU2VhcmNoTW9kZWw+PiBGaW5kRGVmaW5pdGlvbkFzeW5jKEZpbmREZWZpbml0aW9uQXJndW1lbnRzIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRmluZCBkZWZpbml0aW9uIGxvY2F0aW9uIGZvciBhIHN5bWJvbFxyXG4gICAgICAgIC8vLyBVc2FnZTogR28gVG8gRGVmaW5pdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElSZWZlcmVuY2VTZWFyY2hNb2RlbD4+IEZpbmREZWZpbml0aW9uTG9jYXRpb25Bc3luYyhGaW5kRGVmaW5pdGlvbkxvY2F0aW9uQXJndW1lbnRzIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIFRhc2s8SW5kZXhRdWVyeVJlc3BvbnNlPElCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPj4gR2V0U291cmNlQXN5bmMoR2V0U291cmNlQXJndW1lbnRzIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudW0gQ29kZXhTZXJ2aWNlTWV0aG9kXHJcbiAgICB7XHJcbiAgICAgICAgU2VhcmNoLFxyXG4gICAgICAgIEZpbmRBbGxSZWZzLFxyXG4gICAgICAgIEZpbmREZWYsXHJcbiAgICAgICAgRmluZERlZkxvY2F0aW9uLFxyXG4gICAgICAgIEdldFNvdXJjZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBDb2RleEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBtYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHRvIHJldHVyblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIGludCBNYXhSZXN1bHRzID0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBDb250ZXh0Q29kZXhBcmd1bWVudHNCYXNlIDogQ29kZXhBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWQgb2YgdGhlIHJlcG9zaXRvcnkgcmVmZXJlbmNpbmcgdGhlIHN5bWJvbC5cclxuICAgICAgICAvLy8gTk9URTogVGhpcyBpcyB1c2VkIHRvIHByaW9yaXR5IGludGVyLXJlcG9zaXRvcnkgbWF0Y2hlcyBvdmVyXHJcbiAgICAgICAgLy8vIG1hdGNoZXMgZnJvbSBvdXRzaWRlIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFJlZmVyZW5jaW5nUmVwb3NpdG9yeUlkO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZCBvZiB0aGUgcHJvamVjdCByZWZlcmVuY2luZyB0aGUgc3ltYm9sLlxyXG4gICAgICAgIC8vLyBOT1RFOiBUaGlzIGlzIHVzZWQgdG8gcHJpb3JpdHkgaW50ZXItcmVwb3NpdG9yeSBtYXRjaGVzIG92ZXJcclxuICAgICAgICAvLy8gbWF0Y2hlcyBmcm9tIG91dHNpZGUgdGhlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUmVmZXJlbmNpbmdQcm9qZWN0SWQ7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkIG9mIHRoZSBmaWxlIHJlZmVyZW5jaW5nIHRoZSBzeW1ib2wuXHJcbiAgICAgICAgLy8vIE5PVEU6IFRoaXMgaXMgdXNlZCB0byBwcmlvcml0eSBpbnRlci1yZXBvc2l0b3J5IG1hdGNoZXMgb3ZlclxyXG4gICAgICAgIC8vLyBtYXRjaGVzIGZyb20gb3V0c2lkZSB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBSZWZlcmVuY2luZ0ZpbGVJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRmluZFN5bWJvbEFyZ3VtZW50c0Jhc2UgOiBDb250ZXh0Q29kZXhBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc3ltYm9sIGlkIG9mIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU3ltYm9sSWQ7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb2plY3QgaWQgb2YgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBQcm9qZWN0SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZpbmREZWZpbml0aW9uQXJndW1lbnRzIDogRmluZFN5bWJvbEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZpbmRBbGxSZWZlcmVuY2VzQXJndW1lbnRzIDogRmluZFN5bWJvbEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRmluZERlZmluaXRpb25Mb2NhdGlvbkFyZ3VtZW50cyA6IEZpbmRTeW1ib2xBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFNlYXJjaEFyZ3VtZW50cyA6IENvbnRleHRDb2RleEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNlYXJjaFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgR2V0U291cmNlQXJndW1lbnRzIDogQ29udGV4dENvZGV4QXJndW1lbnRzQmFzZVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElUZXh0TGluZVNwYW5SZXN1bHQgOiBJUHJvamVjdEZpbGVTY29wZUVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIElUZXh0TGluZVNwYW4gVGV4dFNwYW4geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJU2VhcmNoUmVzdWx0XHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdGV4dCBzcGFuIGZvciBhIHRleHQgcmVzdWx0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBJVGV4dExpbmVTcGFuUmVzdWx0IFRleHRMaW5lIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWZpbml0aW9uIG9mIHRoZSBzZWFyY2ggcmVzdWx0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBJRGVmaW5pdGlvblN5bWJvbCBEZWZpbml0aW9uIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdHJ1Y3QgU2VyaWFsaXphYmxlVGltZVNwYW5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgbG9uZyBUaWNrcyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZXJpYWxpemFibGVUaW1lU3BhbihUaW1lU3BhbiB0aW1lc3BhbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRpY2tzID0gdGltZXNwYW4uVGlja3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVGltZVNwYW4gQXNUaW1lU3BhbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVGltZVNwYW4uRnJvbVRpY2tzKFRpY2tzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW1wbGljaXQgb3BlcmF0b3IgVGltZVNwYW4oU2VyaWFsaXphYmxlVGltZVNwYW4gdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuQXNUaW1lU3BhbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbXBsaWNpdCBvcGVyYXRvciBTZXJpYWxpemFibGVUaW1lU3BhbihUaW1lU3BhbiB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2VyaWFsaXphYmxlVGltZVNwYW4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUb1N0cmluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gQXNUaW1lU3BhbigpLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBJbmRleFF1ZXJ5UmVzcG9uc2VcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIElmIHRoZSBxdWVyeSBmYWlsZWQsIHRoaXMgd2lsbCBjb250YWluIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEVycm9yIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmF3IHF1ZXJ5IHNlbnQgdG8gdGhlIGluZGV4IHNlcnZlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIExpc3Q8c3RyaW5nPiBSYXdRdWVyaWVzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc3BlbnQgZXhlY3V0aW5nIHRoZSBxdWVyeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIFNlcmlhbGl6YWJsZVRpbWVTcGFuIER1cmF0aW9uIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc3BlbnQgZXhlY3V0aW5nIHRoZSBxdWVyeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIFNlcmlhbGl6YWJsZVRpbWVTcGFuIFNlcnZlclRpbWUgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRvU3RyaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuRm9ybWF0KFwiRXJyb3I6IHswfSwgRHVyYXRpb246IHsxfVwiLEVycm9yLER1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEluZGV4UXVlcnlSZXNwb25zZTxUPiA6IEluZGV4UXVlcnlSZXNwb25zZVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlc3VsdHMgb2YgdGhlIHF1ZXJ5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgVCBSZXN1bHQgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRvU3RyaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuRm9ybWF0KFwiUmVzdWx0OiB7MH0sIHsxfVwiLFJlc3VsdCxiYXNlLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSW5kZXhRdWVyeUhpdHM8VD5cclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0b3RhbCBudW1iZXIgb2YgcmVzdWx0cyBtYXRjaGluZyB0aGUgcXVlcnkuIFxyXG4gICAgICAgIC8vLyBOT1RFOiBUaGlzIG1heSBiZSBncmVhdGVyIHRoYW4gdGhlIG51bWJlciBvZiBoaXRzIHJldHVybmVkLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIGxvbmcgVG90YWwgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXN1bHRzIG9mIHRoZSBxdWVyeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIExpc3Q8VD4gSGl0cyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVG9TdHJpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCJUb3RhbDogezB9LCB7MX1cIixUb3RhbCxiYXNlLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxUPiA6IEluZGV4UXVlcnlSZXNwb25zZTxJbmRleFF1ZXJ5SGl0czxUPj5cclxuICAgIHtcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLkxpbnEuRXhwcmVzc2lvbnM7XHJcbnVzaW5nIFN5c3RlbS5SdW50aW1lLkNvbXBpbGVyU2VydmljZXM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4XHJcbntcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBTZWFyY2hUeXBlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBOYW1lIHsgZ2V0OyBwcm90ZWN0ZWQgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBJbmRleE5hbWUgeyBnZXQ7IHByb3RlY3RlZCBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgaW50IElkIHsgZ2V0OyBwcm90ZWN0ZWQgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZTxUPiBDcmVhdGU8VD4oTGlzdDxTZWFyY2hUeXBlPiByZWdpc3RlcmVkU2VhcmNoVHlwZXMsIFtDYWxsZXJNZW1iZXJOYW1lXXN0cmluZyBuYW1lID0gbnVsbClcclxuICAgICAgICAgICAgd2hlcmUgVCA6IGNsYXNzLCBJU2VhcmNoRW50aXR5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VhcmNoVHlwZSA9IG5ldyBTZWFyY2hUeXBlPFQ+KG5hbWUpO1xyXG4gICAgICAgICAgICBzZWFyY2hUeXBlLklkID0gcmVnaXN0ZXJlZFNlYXJjaFR5cGVzLkNvdW50O1xyXG4gICAgICAgICAgICByZWdpc3RlcmVkU2VhcmNoVHlwZXMuQWRkKHNlYXJjaFR5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBUeXBlIFR5cGUgeyBnZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgU2VhcmNoVHlwZTxUU2VhcmNoVHlwZT4gOiBTZWFyY2hUeXBlXHJcbiAgICAgICAgd2hlcmUgVFNlYXJjaFR5cGUgOiBjbGFzcywgSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBUeXBlIFR5cGUge2dldHtyZXR1cm4gdHlwZW9mKFRTZWFyY2hUeXBlKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgTGlzdDxUdXBsZTxFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+LCBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+Pj4gQ29weVRvRmllbGRzID0gbmV3IExpc3Q8VHVwbGU8RXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiwgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+Pj4+KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBMaXN0PFR1cGxlPEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4sIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4+PiBJbmhlcml0RmllbGRzID0gbmV3IExpc3Q8VHVwbGU8RXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiwgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+Pj4+KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hUeXBlKHN0cmluZyBuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIEluZGV4TmFtZSA9IE5hbWUuVG9Mb3dlckludmFyaWFudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFR5cGU8VFNlYXJjaFR5cGU+IEluaGVyaXQ8VD4oXHJcbiAgICAgICAgICAgIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgVD4+IHByb3ZpZGVyRmllbGQsXHJcbiAgICAgICAgICAgIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgVD4+IHNlYXJjaEZpZWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoVHlwZTxUU2VhcmNoVHlwZT4gQ29weVRvKFxyXG4gICAgICAgICAgICBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+IHNvdXJjZUZpZWxkLFxyXG4gICAgICAgICAgICBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+IHRhcmdldEZpZWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoVHlwZTxUU2VhcmNoVHlwZT4gRXhjbHVkZShcclxuICAgICAgICAgICAgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiBzZWFyY2hGaWVsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFR5cGU8VFNlYXJjaFR5cGU+IFNlYXJjaEFzPFQ+KFxyXG4gICAgICAgICAgICBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIFQ+PiBzZWFyY2hGaWVsZCxcclxuICAgICAgICAgICAgU2VhcmNoQmVoYXZpb3IgYmVoYXZpb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uTGlucS5FeHByZXNzaW9ucztcclxudXNpbmcgU3lzdGVtLlJ1bnRpbWUuQ29tcGlsZXJTZXJ2aWNlcztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXhcclxue1xyXG4gICAgLypcclxuICAgICAqIFR5cGVzIGluIHRoaXMgZmlsZSBkZWZpbmUgc2VhcmNoIGJlaGF2aW9ycy4gQ2hhbmdlcyBzaG91bGQgYmUgbWFkZSB3aXRoIGNhdXRpb24gYXMgdGhleSBjYW4gYWZmZWN0XHJcbiAgICAgKiB0aGUgbWFwcGluZyBzY2hlbWEgZm9yIGluZGljZXMgYW5kIHdpbGwgZ2VuZXJhbGx5IG5lZWQgdG8gYmUgYmFja3dhcmQgY29tcGF0aWJsZS5cclxuICAgICAqIEFkZGl0aW9ucyBzaG91bGQgYmUgZ2VuZXJhbGx5IHNhZmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGFzcyBTZWFyY2hUeXBlc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTGlzdDxTZWFyY2hUeXBlPiBSZWdpc3RlcmVkU2VhcmNoVHlwZXMgPSBuZXcgTGlzdDxTZWFyY2hUeXBlPigpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgRGVmaW5pdGlvbiA9IFNlYXJjaFR5cGUuQ3JlYXRlPElEZWZpbml0aW9uU2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcbiAgICAgICAgLy8uQ29weVRvKGRzID0+IGRzLkRlZmluaXRpb24uTW9kaWZpZXJzLCBkcyA9PiBkcy5LZXl3b3JkcylcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5LaW5kLCBkcyA9PiBkcy5LaW5kKVxyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLkV4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaCwgZHMgPT4gZHMuRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoKVxyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLktpbmQsIGRzID0+IGRzLktleXdvcmRzKVxyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLlNob3J0TmFtZSwgZHMgPT4gZHMuU2hvcnROYW1lKVxyXG4gICAgICAgIC8vLy8uQ29weVRvKGRzID0+IGRzLkxhbmd1YWdlLCBkcyA9PiBkcy5LZXl3b3JkcylcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5Qcm9qZWN0SWQsIGRzID0+IGRzLlByb2plY3RJZClcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5Qcm9qZWN0SWQsIGRzID0+IGRzLktleXdvcmRzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFJlZmVyZW5jZSA9IFNlYXJjaFR5cGUuQ3JlYXRlPElSZWZlcmVuY2VTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuICAgICAgICAvLy5Db3B5VG8ocnMgPT4gcnMuU3BhbnMuRmlyc3QoKS5SZWZlcmVuY2UsIHJzID0+IHJzLlJlZmVyZW5jZSk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBUZXh0U291cmNlID0gU2VhcmNoVHlwZS5DcmVhdGU8SVRleHRTb3VyY2VTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuRmlsZS5Tb3VyY2VGaWxlLkNvbnRlbnQsIHNzID0+IHNzLkNvbnRlbnQpXHJcbiAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGUuU291cmNlRmlsZS5JbmZvLlJlcG9SZWxhdGl2ZVBhdGgsIHNzID0+IHNzLlJlcG9SZWxhdGl2ZVBhdGgpXHJcbiAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGUuUHJvamVjdElkLCBzcyA9PiBzcy5Qcm9qZWN0SWQpXHJcbiAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGUuSW5mby5QYXRoLCBzcyA9PiBzcy5GaWxlUGF0aCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBCb3VuZFNvdXJjZSA9IFNlYXJjaFR5cGUuQ3JlYXRlPElCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG4gICAgICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuRmlsZS5Tb3VyY2VGaWxlLkNvbnRlbnQsIHNzID0+IHNzLkNvbnRlbnQpXHJcbiAgICAgICAgICAgIC8vLkNvcHlUbyhzcyA9PiBzcy5GaWxlLlNvdXJjZUZpbGUuSW5mby5SZXBvUmVsYXRpdmVQYXRoLCBzcyA9PiBzcy5SZXBvUmVsYXRpdmVQYXRoKVxyXG4gICAgICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuQmluZGluZ0luZm8uUHJvamVjdElkLCBzcyA9PiBzcy5Qcm9qZWN0SWQpXHJcbiAgICAgICAgICAgIC8vLkNvcHlUbyhzcyA9PiBzcy5GaWxlUGF0aCwgc3MgPT4gc3MuRmlsZVBhdGgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgTGFuZ3VhZ2UgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJTGFuZ3VhZ2VTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFJlcG9zaXRvcnkgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJUmVwb3NpdG9yeVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgUHJvamVjdCA9IFNlYXJjaFR5cGUuQ3JlYXRlPElQcm9qZWN0U2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcylcclxuICAgICAgICAgICAgLkV4Y2x1ZGUoc20gPT4gU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5GaXJzdDxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VkUHJvamVjdD4oc20uUHJvamVjdC5Qcm9qZWN0UmVmZXJlbmNlcykuRGVmaW5pdGlvbnMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgQ29tbWl0ID0gU2VhcmNoVHlwZS5DcmVhdGU8SUNvbW1pdFNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgQ29tbWl0RmlsZXMgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJQ29tbWl0RmlsZXNTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFByb2plY3RSZWZlcmVuY2UgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgUHJvcGVydHkgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJUHJvcGVydHlTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFN0b3JlZEZpbHRlciA9IFNlYXJjaFR5cGUuQ3JlYXRlPElTdG9yZWRGaWx0ZXI+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBSZWdpc3RlcmVkRW50aXR5ID0gU2VhcmNoVHlwZS5DcmVhdGU8SVJlZ2lzdGVyZWRFbnRpdHk+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluIG9yZGVyIHRvIGNvbXB1dGUgYSBzdGFibGUgaW50ZWdyYWwgaWQgZm9yIGVhY2ggZW50aXR5LiBUaGlzIHR5cGUgaXMgdXNlZCB0byBzdG9yZSBpbnRvIGEgJ2ZvbGxvdycgaW5kZXggd2hpY2hcclxuICAgIC8vLyBzdG9yZXMgZW50aXRpZXMgb2YgdGhpcyB0eXBlIHVzaW5nIHRoZSA8c2VlIGNyZWY9XCJJU2VhcmNoRW50aXR5LlVpZFwiLz4gb2YgdGhlIGNvcnJlc3BvbmRpbmcgc2VhcmNoIGVudGl0eS4gVGhlbiB0aGVcclxuICAgIC8vLyBzZXF1ZW5jZSBudW1iZXIgYXNzaWduZWQgYnkgRWxhc3RpY1NlYXJjaCBpcyB1c2VkIGFzIHRoZSBzaGFyZCBzdGFibGUgaWQgKDxzZWUgY3JlZj1cIklTZWFyY2hFbnRpdHkuU2hhcmRTdGFibGVJZFwiLz4pXHJcbiAgICAvLy8gZm9yIHRoZSBlbnRpdHkuIFRoaXMgYXBwcm9hY2ggaXMgdXNlZCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgc3RhYmxlIGlkIGFwcGVhcnMgYXMgYW4gZXhwbGljaXQgZmllbGQgaW4gdGhlIGRvY3VtZW50IHJhdGhlclxyXG4gICAgLy8vIHdoaWNoIGFsbG93cyBjb25maWd1cmF0aW9uIG9mIGhvdyB0aGUgZmllbGQgaXMgaW5kZXhlZCAobm90IHRydWUgZm9yIHNlcXVlbmNlIG51bWJlciBmaWVsZCB3aXRob3V0IGNvZGUgY2hhbmdlcyB0byBFUykuXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGludGVyZmFjZSBJUmVnaXN0ZXJlZEVudGl0eSA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkYXRlIGluIHdoaWNoIHRoZSBlbnRpdHkgd2FzIHJlZ2lzdGVyZWQgKGkuZS4gYWRkZWQgdG8gdGhlIHN0b3JlKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgRGF0ZVRpbWUgRGF0ZUFkZGVkIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVmaW5lcyBhIHN0b3JlZCBmaWx0ZXIgd2hpY2ggbWF0Y2hlcyBlbnRpdGllcyBpbiBhIHBhcnRpY3VsYXIgaW5kZXggc2hhcmQgaW4gYSBzdGFibGUgbWFubmVyXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGludGVyZmFjZSBJU3RvcmVkRmlsdGVyIDogSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRpbWUgb2YgdGhlIGxhc3QgdXBkYXRlIHRvIHRoZSBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBEYXRlVGltZSBEYXRlVXBkYXRlZCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGluZGV4IHRvIHdoaWNoIHRoZSBzdG9yZWQgZmlsdGVyIGFwcGxpZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHN0cmluZyBJbmRleE5hbWUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNoYXJkIHRvIHdoaWNoIHRoZSBzdG9yZWQgZmlsdGVyIGFwcGxpZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIGludCBTaGFyZCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHN0YWJsZSBpZHMgdG8gaW5jbHVkZSBpbiB0aGUgc3RvcmVkIGZpbHRlci5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElSZWFkT25seUxpc3Q8bG9uZz4gU3RhYmxlSWRzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2YgdWlkcyB0byBmb3Igc3RvcmVkIGZpbHRlcnMgd2hpY2ggd2lsbCBiZSB1bmlvbmVkIHdpdGggdGhlIGdpdmVuIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElSZWFkT25seUxpc3Q8c3RyaW5nPiBCYXNlVWlkcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHN0b3JlZCBmaWx0ZXJzIHdoaWNoIHdpbGwgYmUgdW5pb25lZCB3aXRoIHRoZSBnaXZlbiBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBJUmVhZE9ubHlMaXN0PGJ5dGVbXT4gVW5pb25GaWx0ZXJzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzdG9yZWQgZmlsdGVyIGJpdCBzZXQgd2hpY2ggbWF0Y2hlcyB0aGUgc3RvcmVkIGZpbHRlciBkb2N1bWVudHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIGJ5dGVbXSBGaWx0ZXIgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGhhc2ggb2YgPHNlZSBjcmVmPVwiRmlsdGVyXCIvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgc3RyaW5nIEZpbHRlckhhc2ggeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvdW50IG9mIGVsZW1lbnRzIG1hdGNoZWQgYnkgPHNlZSBjcmVmPVwiRmlsdGVyXCIvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgaW50IEZpbHRlckNvdW50IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSURlZmluaXRpb25TZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJRGVmaW5pdGlvblN5bWJvbCBEZWZpbml0aW9uIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBOb3Qgc3VyZSB0aGF0IHRoaXMgaXMgYWN0dWFsbHkgbmVlZGVkXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBLZXl3b3JkcyBhcmUgYWRkaXRpb25hbCB0ZXJtcyB3aGljaCBjYW4gYmUgdXNlZCB0byBmaW5kIGEgZ2l2ZW4gc3ltYm9sLlxyXG4gICAgICAgIC8vLyBOT1RFOiBLZXl3b3JkcyBjYW4gb25seSBiZSB1c2VkIHRvIHNlbGVjdCBmcm9tIHN5bWJvbHMgd2hpY2ggaGF2ZVxyXG4gICAgICAgIC8vLyBhIHByaW1hcnkgdGVybSBtYXRjaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW1NlYXJjaEJlaGF2aW9yKFNlYXJjaEJlaGF2aW9yLk5vcm1hbGl6ZWRLZXl3b3JkKV1cclxuICAgICAgICBJUmVhZE9ubHlMaXN0PHN0cmluZz4gS2V5d29yZHMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJTGFuZ3VhZ2VTZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJTGFuZ3VhZ2VJbmZvIExhbmd1YWdlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVJlZmVyZW5jZVNlYXJjaE1vZGVsIDogSVByb2plY3RGaWxlU2NvcGVFbnRpdHksIElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZWZlcmVuY2Ugc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBJQ29kZVN5bWJvbCBSZWZlcmVuY2UgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vIFRPRE86IE5lZWQgc29tZSBzb3J0IG9mIG92ZXJyaWRlIGZvciBzZWFyY2hpbmcgUmVsYXRlZERlZmluaXRpb24gb2YgdGhlXHJcbiAgICAgICAgLy8gUmVmZXJlbmNlU3BhblxyXG4gICAgICAgIFtTZWFyY2hCZWhhdmlvcihTZWFyY2hCZWhhdmlvci5Ob25lKV1cclxuICAgICAgICBbUmVhZE9ubHlMaXN0XVxyXG4gICAgICAgIFtDb2VyY2VHZXRdXHJcbiAgICAgICAgSVJlYWRPbmx5TGlzdDxJU3ltYm9sU3Bhbj4gU3BhbnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tcHJlc3NlZCBsaXN0IG9mIHNwYW5zXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBbU2VhcmNoQmVoYXZpb3IoU2VhcmNoQmVoYXZpb3IuTm9uZSldXHJcbiAgICAgICAgSVN5bWJvbExpbmVTcGFuTGlzdCBDb21wcmVzc2VkU3BhbnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJU291cmNlU2VhcmNoTW9kZWxCYXNlIDogSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlIGZyb20gc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKG1heSBiZSBudWxsKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyBTb3VyY2VDb250cm9sSW5mbyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElCb3VuZFNvdXJjZVNlYXJjaE1vZGVsIDogSVNvdXJjZVNlYXJjaE1vZGVsQmFzZVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBhc3NvY2lhdGVkIDxzZWUgY3JlZj1cIklTb3VyY2VGaWxlXCIvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgc3RyaW5nIFRleHRVaWQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBJU291cmNlRmlsZUluZm8gU291cmNlSW5mbyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgYmluZGluZyBpbmZvXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBJQm91bmRTb3VyY2VJbmZvIEJpbmRpbmdJbmZvIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiBjbGFzc2lmaWNhdGlvbiBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW1NlYXJjaEJlaGF2aW9yKFNlYXJjaEJlaGF2aW9yLk5vbmUpXVxyXG4gICAgICAgIElDbGFzc2lmaWNhdGlvbkxpc3QgQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21wcmVzc2VkIGxpc3Qgb2YgcmVmZXJlbmNlIHNwYW5zXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBbU2VhcmNoQmVoYXZpb3IoU2VhcmNoQmVoYXZpb3IuTm9uZSldXHJcbiAgICAgICAgSVJlZmVyZW5jZUxpc3QgQ29tcHJlc3NlZFJlZmVyZW5jZXMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJVGV4dFNvdXJjZVNlYXJjaE1vZGVsIDogSVNvdXJjZVNlYXJjaE1vZGVsQmFzZVxyXG4gICAge1xyXG4gICAgICAgIElTb3VyY2VGaWxlIEZpbGUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJUmVwb3NpdG9yeVNlYXJjaE1vZGVsIDogSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIElSZXBvc2l0b3J5IFJlcG9zaXRvcnkgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJUHJvamVjdFNlYXJjaE1vZGVsIDogSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIElQcm9qZWN0IFByb2plY3QgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIDogSVByb2plY3RTY29wZUVudGl0eSwgSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIElSZWZlcmVuY2VkUHJvamVjdCBQcm9qZWN0UmVmZXJlbmNlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSUNvbW1pdFNlYXJjaE1vZGVsIDogSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIElDb21taXQgQ29tbWl0IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBUaGUgc2V0IG9mIGZpbGVzIHByZXNlbnQgaW4gdGhlIHJlcG9zaXRvcnkgYXQgYSBnaXZlbiBjb21taXQuXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGludGVyZmFjZSBJQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCA6IElDb21taXRTY29wZUVudGl0eSwgSVJlcG9TY29wZUVudGl0eSwgSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIElSZWFkT25seUxpc3Q8SUNvbW1pdEZpbGVMaW5rPiBDb21taXRGaWxlcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxufVxyXG5cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBDb2RleC5PYmplY3RNb2RlbDtcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5VdGlsaXRpZXNcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBwYXJ0aWFsIGNsYXNzIENvbGxlY3Rpb25VdGlsaXRpZXNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgY2xhc3MgRW1wdHk8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTGlzdDxUPiBMaXN0ID0gbmV3IExpc3Q8VD4oMCk7XHJcblxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRbXSBBcnJheSA9IG5ldyBUWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVXRpbGl0aWVzXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgU2VyaWFsaXphdGlvblV0aWxpdGllc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVCBBc3NpZ25EdXBsaWNhdGU8VD4oVCB2YWx1ZSwgcmVmIFQgbGFzdFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKEVxdWFsaXR5Q29tcGFyZXI8VD4uRGVmYXVsdC5FcXVhbHModmFsdWUsIGRlZmF1bHQoVCkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFzdFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVCBSZW1vdmVEdXBsaWNhdGU8VD4oVCB2YWx1ZSwgcmVmIFQgbGFzdFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKEVxdWFsaXR5Q29tcGFyZXI8VD4uRGVmYXVsdC5FcXVhbHModmFsdWUsIGRlZmF1bHQoVCkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdChUKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuI2lmIEJSSURHRVxyXG51c2luZyBDb2RleC5WaWV3LldlYjtcclxuI2Vsc2VcclxudXNpbmcgQ29kZXguRWxhc3RpY1NlYXJjaC5TZWFyY2g7XHJcbiNlbmRpZlxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICBwYXJ0aWFsIGNsYXNzIEFwcFxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgQXBwKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFN0eWxlcy5Jbml0aWFsaXplKCk7XHJcbiNpZiBCUklER0VcclxuICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBzaG91bGQgYmUgY29uZmlndXJhYmxlIHRocm91Z2ggYnVpbGQgcHJvcGVydGllcyBzb21laG93XHJcbiAgICAgICAgICAgIENvZGV4UHJvdmlkZXIuSW5zdGFuY2UgPSBuZXcgV2ViQXBpQ29kZXgoXCJodHRwOi8vbG9jYWxob3N0Ojk0OTEvYXBpL2NvZGV4L1wiKTtcclxuI2Vsc2VcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgc2hvdWxkIGJlIGNvbmZpZ3VyYWJsZSB0aHJvdWdoIGJ1aWxkIHByb3BlcnRpZXMgc29tZWhvd1xyXG4gICAgICAgICAgICBDb2RleFByb3ZpZGVyLkluc3RhbmNlID0gbmV3IEVsYXN0aWNTZWFyY2hDb2RleChuZXcgRWxhc3RpY1NlYXJjaC5FbGFzdGljU2VhcmNoU3RvcmVDb25maWd1cmF0aW9uKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJlZml4ID0gXCJhcHB0ZXN0XCJcclxuICAgICAgICAgICAgfSwgbmV3IEVsYXN0aWNTZWFyY2guRWxhc3RpY1NlYXJjaFNlcnZpY2UobmV3IEVsYXN0aWNTZWFyY2guRWxhc3RpY1NlYXJjaFNlcnZpY2VDb25maWd1cmF0aW9uKFwiaHR0cDovL2xvY2FsaG9zdDo5MjAwXCIpKSk7XHJcbiNlbmRpZlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDb2RleC5TZGsuU2VhcmNoO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuT2JqZWN0TW9kZWw7XHJcbnVzaW5nIFN5c3RlbS5Db21wb25lbnRNb2RlbDtcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5SdW50aW1lLkNvbXBpbGVyU2VydmljZXM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uV2luZG93cztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBUZXh0U3BhblNlYXJjaFJlc3VsdFZpZXdNb2RlbCA6IEZpbGVJdGVtUmVzdWx0Vmlld01vZGVsXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIElUZXh0TGluZVNwYW5SZXN1bHQgU2VhcmNoUmVzdWx0IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IExpbmVOdW1iZXIgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBQcmVmaXhUZXh0IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29udGVudFRleHQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTdWZmaXhUZXh0IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVGV4dFNwYW5TZWFyY2hSZXN1bHRWaWV3TW9kZWwoSVRleHRMaW5lU3BhblJlc3VsdCByZXN1bHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZWFyY2hSZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHZhciByZWZlcnJpbmdTcGFuID0gcmVzdWx0LlRleHRTcGFuO1xyXG4gICAgICAgICAgICBMaW5lTnVtYmVyID0gcmVmZXJyaW5nU3Bhbi5MaW5lTnVtYmVyO1xyXG4gICAgICAgICAgICBzdHJpbmcgbGluZVNwYW5UZXh0ID0gcmVmZXJyaW5nU3Bhbi5MaW5lU3BhblRleHQ7XHJcbiAgICAgICAgICAgIGlmIChsaW5lU3BhblRleHQgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJlZml4VGV4dCA9IGxpbmVTcGFuVGV4dC5TdWJzdHJpbmcoMCwgcmVmZXJyaW5nU3Bhbi5MaW5lU3BhblN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIENvbnRlbnRUZXh0ID0gbGluZVNwYW5UZXh0LlN1YnN0cmluZyhyZWZlcnJpbmdTcGFuLkxpbmVTcGFuU3RhcnQsIHJlZmVycmluZ1NwYW4uTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIFN1ZmZpeFRleHQgPSBsaW5lU3BhblRleHQuU3Vic3RyaW5nKHJlZmVycmluZ1NwYW4uTGluZVNwYW5TdGFydCArIHJlZmVycmluZ1NwYW4uTGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvamVjdEl0ZW1SZXN1bHRWaWV3TW9kZWxcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRmlsZUl0ZW1SZXN1bHRWaWV3TW9kZWxcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRmlsZVJlc3VsdHNWaWV3TW9kZWwgOiBQcm9qZWN0SXRlbVJlc3VsdFZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUGF0aCB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIElSZWFkT25seUxpc3Q8RmlsZUl0ZW1SZXN1bHRWaWV3TW9kZWw+IEl0ZW1zIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgU3ltYm9sUmVzdWx0Vmlld01vZGVsIDogUHJvamVjdEl0ZW1SZXN1bHRWaWV3TW9kZWxcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNob3J0TmFtZSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBEaXNwbGF5TmFtZSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTeW1ib2xLaW5kIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFByb2plY3RJZCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSW1hZ2VNb25pa2VyIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgaW50IFNvcnRPcmRlciB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBJZGVudGlmaWVyTGVuZ3RoIHtnZXR7cmV0dXJuIFNob3J0TmFtZS5MZW5ndGg7fX1cclxuXHJcbiAgICAgICAgcHVibGljIFN5bWJvbFJlc3VsdFZpZXdNb2RlbChJRGVmaW5pdGlvblN5bWJvbCBlbnRyeSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNob3J0TmFtZSA9IGVudHJ5LlNob3J0TmFtZTtcclxuICAgICAgICAgICAgRGlzcGxheU5hbWUgPSBlbnRyeS5EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgUHJvamVjdElkID0gZW50cnkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICBTeW1ib2xLaW5kID0gZ2xvYmFsOjpCcmlkZ2UuU2NyaXB0LlRvVGVtcChcImtleTFcIixlbnRyeS5LaW5kKSE9bnVsbD9nbG9iYWw6OkJyaWRnZS5TY3JpcHQuRnJvbVRlbXA8c3RyaW5nPihcImtleTFcIikuVG9Mb3dlckludmFyaWFudCgpOihzdHJpbmcpbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFByb2plY3RHcm91cFJlc3VsdHNWaWV3TW9kZWxcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFByb2plY3ROYW1lIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgSVJlYWRPbmx5TGlzdDxQcm9qZWN0SXRlbVJlc3VsdFZpZXdNb2RlbD4gSXRlbXMgeyBnZXQ7IHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBQcm9qZWN0UmVzdWx0c1ZpZXdNb2RlbCA6IExlZnRQYW5lQ29udGVudFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBMaXN0PFByb2plY3RHcm91cFJlc3VsdHNWaWV3TW9kZWw+IFByb2plY3RHcm91cHMgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUHJvamVjdFJlc3VsdHNWaWV3TW9kZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVzdWx0c1ZpZXdNb2RlbChzdHJpbmcgc2VhcmNoU3RyaW5nLCBJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElTZWFyY2hSZXN1bHQ+IHJlc3BvbnNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUHJvamVjdEdyb3VwcyA9IFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0LGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2w+KHJlc3BvbnNlLlJlc3VsdC5IaXRzLChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0LCBnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3ltYm9sPikoc3IgPT4gc3IuRGVmaW5pdGlvbikpLkdyb3VwQnk8c3RyaW5nPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3ltYm9sLCBzdHJpbmc+KShzciA9PiBzci5Qcm9qZWN0SWQpKS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5WaWV3LlByb2plY3RHcm91cFJlc3VsdHNWaWV3TW9kZWw+KChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6U3lzdGVtLkxpbnEuR3JvdXBpbmc8c3RyaW5nLCBnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3ltYm9sPiwgZ2xvYmFsOjpDb2RleC5WaWV3LlByb2plY3RHcm91cFJlc3VsdHNWaWV3TW9kZWw+KShwcm9qZWN0R3JvdXAgPT4gbmV3IFByb2plY3RHcm91cFJlc3VsdHNWaWV3TW9kZWwoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0TmFtZSA9IHByb2plY3RHcm91cC5LZXksXHJcbiAgICAgICAgICAgICAgICBJdGVtcyA9IHByb2plY3RHcm91cC5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5WaWV3LlN5bWJvbFJlc3VsdFZpZXdNb2RlbD4oKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbCwgZ2xvYmFsOjpDb2RleC5WaWV3LlN5bWJvbFJlc3VsdFZpZXdNb2RlbD4pKHN5bWJvbCA9PiBuZXcgU3ltYm9sUmVzdWx0Vmlld01vZGVsKHN5bWJvbCkpKS5Ub0xpc3QoKVxyXG4gICAgICAgICAgICB9KSkuVG9MaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBDYXRlZ29yeUdyb3VwU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBWaXNpYmlsaXR5IEhlYWRlclZpc2liaWxpdHkge2dldHtyZXR1cm4gc3RyaW5nLklzTnVsbE9yRW1wdHkoSGVhZGVyKSA/IFZpc2liaWxpdHkuQ29sbGFwc2VkIDogVmlzaWJpbGl0eS5WaXNpYmxlO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSGVhZGVyIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUHJvamVjdFJlc3VsdHNWaWV3TW9kZWwgUHJvamVjdFJlc3VsdHMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDYXRlZ29yeUdyb3VwU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbChzdHJpbmcgc2VhcmNoU3RyaW5nLCBJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElTZWFyY2hSZXN1bHQ+IHJlc3BvbnNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlLlJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIFByb2plY3RSZXN1bHRzLlByb2plY3RHcm91cHMgPSBTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdD4ocmVzdWx0LkhpdHMsKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQsIGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0Pikoc3IgPT4gc3IuVGV4dExpbmUpKS5Hcm91cEJ5PHN0cmluZz4oKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQsIHN0cmluZz4pKHNyID0+IHNyLlByb2plY3RJZCkpLlNlbGVjdDxnbG9iYWw6OkNvZGV4LlZpZXcuUHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbD4oKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpTeXN0ZW0uTGlucS5Hcm91cGluZzxzdHJpbmcsIGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0PiwgZ2xvYmFsOjpDb2RleC5WaWV3LlByb2plY3RHcm91cFJlc3VsdHNWaWV3TW9kZWw+KShwcm9qZWN0R3JvdXAgPT4gbmV3IFByb2plY3RHcm91cFJlc3VsdHNWaWV3TW9kZWwoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0TmFtZSA9IHByb2plY3RHcm91cC5LZXksXHJcbiAgICAgICAgICAgICAgICBJdGVtcyA9IHByb2plY3RHcm91cC5Hcm91cEJ5PHN0cmluZz4oKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQsIHN0cmluZz4pKHNyID0+IHNyLlByb2plY3RSZWxhdGl2ZVBhdGgpKS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5WaWV3LkZpbGVSZXN1bHRzVmlld01vZGVsPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OlN5c3RlbS5MaW5xLkdyb3VwaW5nPHN0cmluZywgZ2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQ+LCBnbG9iYWw6OkNvZGV4LlZpZXcuRmlsZVJlc3VsdHNWaWV3TW9kZWw+KShmaWxlR3JvdXAgPT4gbmV3IEZpbGVSZXN1bHRzVmlld01vZGVsKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBQYXRoID0gZmlsZUdyb3VwLktleSxcclxuICAgICAgICAgICAgICAgICAgICBJdGVtcyA9IGZpbGVHcm91cC5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5WaWV3LlRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdCwgZ2xvYmFsOjpDb2RleC5WaWV3LlRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsPikoc3IgPT4gbmV3IFRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsKHNyKSkpLlRvTGlzdCgpXHJcbiAgICAgICAgICAgICAgICB9KSkuVG9MaXN0KClcclxuICAgICAgICAgICAgfSkpLlRvTGlzdCgpO1xyXG5cclxuICAgICAgICAgICAgSGVhZGVyID0gc3RyaW5nLkZvcm1hdChcInswfSB0ZXh0IHNlYXJjaCBoaXRzIGZvciAnezF9J1wiLHJlc3VsdC5IaXRzLkNvdW50LHNlYXJjaFN0cmluZyk7XHJcbiAgICAgICAgfVxyXG5cbiAgICBcbnByaXZhdGUgUHJvamVjdFJlc3VsdHNWaWV3TW9kZWwgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX1Byb2plY3RSZXN1bHRzPW5ldyBQcm9qZWN0UmVzdWx0c1ZpZXdNb2RlbCgpO31cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQ2F0ZWdvcml6ZWRTZWFyY2hSZXN1bHRzVmlld01vZGVsIDogTGVmdFBhbmVDb250ZW50XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExpc3Q8Q2F0ZWdvcnlHcm91cFNlYXJjaFJlc3VsdHNWaWV3TW9kZWw+IENhdGVnb3JpZXMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDYXRlZ29yaXplZFNlYXJjaFJlc3VsdHNWaWV3TW9kZWwoc3RyaW5nIHNlYXJjaFN0cmluZywgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0PiByZXNwb25zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENhdGVnb3JpZXMgPSBnbG9iYWw6OkJyaWRnZS5TY3JpcHQuQ2FsbEZvcihuZXcgTGlzdDxDYXRlZ29yeUdyb3VwU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbD4oKSwoX28xKT0+e19vMS5BZGQobmV3IENhdGVnb3J5R3JvdXBTZWFyY2hSZXN1bHRzVmlld01vZGVsKHNlYXJjaFN0cmluZywgcmVzcG9uc2UpKTtyZXR1cm4gX28xO30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIExlZnRQYW5lQ29udGVudFxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBMZWZ0UGFuZVZpZXdNb2RlbCA6IE5vdGlmeVByb3BlcnR5Q2hhbmdlZEJhc2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgVmlzaWJpbGl0eSBTZWFyY2hJbmZvVmlzaWJpbGl0eSB7Z2V0e3JldHVybiAhc3RyaW5nLklzTnVsbE9yRW1wdHkoU2VhcmNoSW5mbykgPyBWaXNpYmlsaXR5LlZpc2libGUgOiBWaXNpYmlsaXR5LkNvbGxhcHNlZDt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNlYXJjaEluZm8geyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVmlzaWJpbGl0eSBDb250ZW50VmlzaWJpbGl0eSB7Z2V0e3JldHVybiBDb250ZW50ICE9IG51bGwgPyBWaXNpYmlsaXR5LlZpc2libGUgOiBWaXNpYmlsaXR5LkNvbGxhcHNlZDt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgTGVmdFBhbmVDb250ZW50IENvbnRlbnQgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExlZnRQYW5lVmlld01vZGVsIEluaXRpYWwgPSBuZXcgTGVmdFBhbmVWaWV3TW9kZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2VhcmNoSW5mbyA9IFwiRW50ZXIgYSBzZWFyY2ggc3RyaW5nLiBTdGFydCB3aXRoIGAgZm9yIGZ1bGwgdGV4dCBzZWFyY2ggcmVzdWx0cyBvbmx5LlwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBMZWZ0UGFuZVZpZXdNb2RlbCBGcm9tU2VhcmNoUmVzcG9uc2Uoc3RyaW5nIHNlYXJjaFN0cmluZywgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0PiByZXNwb25zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5FcnJvciAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExlZnRQYW5lVmlld01vZGVsKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2hJbmZvID0gcmVzcG9uc2UuRXJyb3JcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKGdsb2JhbDo6QnJpZGdlLlNjcmlwdC5Ub1RlbXAoXCJrZXkyXCIscmVzcG9uc2UuUmVzdWx0KSE9bnVsbD9nbG9iYWw6OkJyaWRnZS5TY3JpcHQuRnJvbVRlbXA8SW5kZXhRdWVyeUhpdHM8SVNlYXJjaFJlc3VsdD4+KFwia2V5MlwiKS5IaXRzOihMaXN0PElTZWFyY2hSZXN1bHQ+KW51bGwpID09IG51bGwgfHwgcmVzcG9uc2UuUmVzdWx0LkhpdHMuQ291bnQgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMZWZ0UGFuZVZpZXdNb2RlbCgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoSW5mbyA9IHN0cmluZy5Gb3JtYXQoXCJObyByZXN1bHRzIGZvdW5kLlwiKSAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2UuUmVzdWx0O1xyXG4gICAgICAgICAgICBib29sIGlzRGVmaW5pdGlvbnNSZXN1bHQgPSByZXN1bHQuSGl0c1swXS5EZWZpbml0aW9uICE9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGVmdFBhbmVWaWV3TW9kZWwoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDb250ZW50ID0gaXNEZWZpbml0aW9uc1Jlc3VsdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgKExlZnRQYW5lQ29udGVudCluZXcgUHJvamVjdFJlc3VsdHNWaWV3TW9kZWwoc2VhcmNoU3RyaW5nLCByZXNwb25zZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXRlZ29yaXplZFNlYXJjaFJlc3VsdHNWaWV3TW9kZWwoc2VhcmNoU3RyaW5nLCByZXNwb25zZSksXHJcbiAgICAgICAgICAgICAgICBTZWFyY2hJbmZvID0gaXNEZWZpbml0aW9uc1Jlc3VsdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdC5IaXRzLkNvdW50IDwgcmVzdWx0LlRvdGFsID9cclxuc3RyaW5nLkZvcm1hdChcIkRpc3BsYXlpbmcgdG9wIHswfSByZXN1bHRzIG91dCBvZiB7MX06XCIscmVzdWx0LkhpdHMuQ291bnQscmVzdWx0LlRvdGFsKTpcclxuc3RyaW5nLkZvcm1hdChcInswfSByZXN1bHRzIGZvdW5kOlwiLHJlc3VsdC5IaXRzLkNvdW50KSlcclxuICAgICAgICAgICAgICAgICAgICA6IHN0cmluZy5FbXB0eVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXG4gICAgXG5wcml2YXRlIHN0cmluZyBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fU2VhcmNoSW5mbz1udWxsO31cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQmluZGFibGVWYWx1ZTxUPiA6IE5vdGlmeVByb3BlcnR5Q2hhbmdlZEJhc2VcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIFQgdmFsdWU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBUIFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgT25Qcm9wZXJ0eUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIE5vdGlmeVByb3BlcnR5Q2hhbmdlZEJhc2UgOiBJTm90aWZ5UHJvcGVydHlDaGFuZ2VkXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgT25Qcm9wZXJ0eUNoYW5nZWQoW0NhbGxlck1lbWJlck5hbWVdIHN0cmluZyBtZW1iZXJOYW1lID0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5Q2hhbmdlZCE9bnVsbD9nbG9iYWw6OkJyaWRnZS5TY3JpcHQuRnJvbUxhbWJkYSgoKT0+cHJvcGVydHlDaGFuZ2VkLkludm9rZSh0aGlzLCBuZXcgUHJvcGVydHlDaGFuZ2VkRXZlbnRBcmdzKG1lbWJlck5hbWUpKSk6bnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZXZlbnQgUHJvcGVydHlDaGFuZ2VkRXZlbnRIYW5kbGVyIHByb3BlcnR5Q2hhbmdlZDtcclxuICAgICAgICBwdWJsaWMgZXZlbnQgUHJvcGVydHlDaGFuZ2VkRXZlbnRIYW5kbGVyIFByb3BlcnR5Q2hhbmdlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWRkXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5Q2hhbmdlZCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVtb3ZlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5Q2hhbmdlZCAtPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgVmlld01vZGVsRGF0YUNvbnRleHQgOiBOb3RpZnlQcm9wZXJ0eUNoYW5nZWRCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBMZWZ0UGFuZVZpZXdNb2RlbCBsZWZ0UGFuZTtcclxuXHJcbiAgICAgICAgcHVibGljIExlZnRQYW5lVmlld01vZGVsIExlZnRQYW5lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnRQYW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gSEFDSyB0byBmb3JjZSBmdWxsIHJlZnJlc2ggb2YgbGVmdCBwYW5lXHJcbiAgICAgICAgICAgICAgICAvL2lmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgICAgICAvLyAgICBsZWZ0UGFuZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBPblByb3BlcnR5Q2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICAgICAgbGVmdFBhbmUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE9uUHJvcGVydHlDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluaXRpYWxpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGVmdFBhbmUgPSBMZWZ0UGFuZVZpZXdNb2RlbC5Jbml0aWFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5NYXJrdXA7XHJcbiNpZiBHUkFOVUxBUlxyXG51c2luZyBJU2VydmljZVByb3ZpZGVyID0gU3lzdGVtLldpbmRvd3MuTWFya3VwLkluaXRpYWxpemVDb250ZXh0O1xyXG4jZW5kaWZcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgR3JhbnVsYXJFeHRlbnNpb25zXHJcbiAgICB7XHJcbiNpZiBHUkFOVUxBUlxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSVByb3BlcnR5UGF0aEVsZW1lbnQgQXNUcmlnZ2VyUHJvcGVydHkodGhpcyBEZXBlbmRlbmN5UHJvcGVydHkgZGVwZW5kZW5jeVByb3BlcnR5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZXBlbmRlbmN5UHJvcGVydHlQYXRoRWxlbWVudChkZXBlbmRlbmN5UHJvcGVydHkpO1xyXG4gICAgICAgIH1cclxuI2Vsc2VcclxuICAgICAgICBwdWJsaWMgc3RhdGljIERlcGVuZGVuY3lQcm9wZXJ0eSBBc1RyaWdnZXJQcm9wZXJ0eSh0aGlzIERlcGVuZGVuY3lQcm9wZXJ0eSBkZXBlbmRlbmN5UHJvcGVydHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVwZW5kZW5jeVByb3BlcnR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL3B1YmxpYyBzdGF0aWMgVHlwZSBHZXRNYXJrdXBUYXJnZXRUeXBlKHRoaXMgSVNlcnZpY2VQcm92aWRlciBwcm92aWRlcilcclxuICAgICAgICAvL3tcclxuICAgICAgICAvLyAgICB2YXIgdGFyZ2V0UHJvdmlkZXIgPSAoSVByb3ZpZGVWYWx1ZVRhcmdldClwcm92aWRlci5HZXRTZXJ2aWNlKHR5cGVvZigpKVxyXG4gICAgICAgIC8vfVxyXG4jZW5kaWZcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBUcmlnZ2VyIFdpdGhTZXR0ZXJzKHRoaXMgVHJpZ2dlciB0cmlnZ2VyLCBwYXJhbXMgU2V0dGVyW10gc2V0dGVycylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBzZXR0ZXIgaW4gc2V0dGVycylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlci5TZXR0ZXJzLkFkZChzZXR0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuQ29udHJvbHM7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkRvY3VtZW50cztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuSW5wdXQ7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1lZGlhO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5NZWRpYS5JbWFnaW5nO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5OYXZpZ2F0aW9uO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5TaGFwZXM7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW50ZXJhY3Rpb24gbG9naWMgZm9yIExlZnRQYW5lLnhhbWxcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBMZWZ0UGFuZVZpZXcgOiBVc2VyQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBMZWZ0UGFuZVZpZXcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDb2RleC5TZGsuU2VhcmNoO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Db250cm9scztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRGF0YTtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRG9jdW1lbnRzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5JbnB1dDtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTWVkaWE7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1lZGlhLkltYWdpbmc7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk5hdmlnYXRpb247XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLlNoYXBlcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbnRlcmFjdGlvbiBsb2dpYyBmb3IgTWFpbldpbmRvdy54YW1sXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgTWFpbldpbmRvdyA6IFdpbmRvd1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBJQ29kZXggQ29kZXhTZXJ2aWNlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIFZpZXdNb2RlbERhdGFDb250ZXh0IFZpZXdNb2RlbCA9IG5ldyBWaWV3TW9kZWxEYXRhQ29udGV4dCgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgTWFpbldpbmRvdygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuRGF0YUNvbnRleHQgPSBWaWV3TW9kZWw7XHJcbiAgICAgICAgICAgIFZpZXdNb2RlbC5Jbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnV0dG9uX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBHcmlkX0xvYWRlZChvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiR3JpZF9Mb2FkZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYXN5bmMgdm9pZCBTZWFyY2hUZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBUZXh0Q2hhbmdlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHNlYXJjaFN0cmluZyA9IFNlYXJjaEJveC5UZXh0O1xyXG4gICAgICAgICAgICBzZWFyY2hTdHJpbmcgPSBzZWFyY2hTdHJpbmcuVHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlYXJjaFN0cmluZy5MZW5ndGggPCAzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBWaWV3TW9kZWwuTGVmdFBhbmUgPSBuZXcgTGVmdFBhbmVWaWV3TW9kZWwoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaEluZm8gPSBcIkVudGVyIGF0IGxlYXN0IDMgY2hhcmFjdGVycy5cIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgQ29kZXhTZXJ2aWNlLlNlYXJjaEFzeW5jKG5ldyBTZWFyY2hBcmd1bWVudHMoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBTZWFyY2hTdHJpbmcgPSBzZWFyY2hTdHJpbmdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBWaWV3TW9kZWwuTGVmdFBhbmUgPSBMZWZ0UGFuZVZpZXdNb2RlbC5Gcm9tU2VhcmNoUmVzcG9uc2Uoc2VhcmNoU3RyaW5nLCByZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cbiAgICBcbnByaXZhdGUgSUNvZGV4IF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19Db2RleFNlcnZpY2U9Q29kZXhQcm92aWRlci5JbnN0YW5jZTt9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Db250cm9scztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTWVkaWE7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIFN0eWxlc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQnJ1c2ggR2V0TW91c2VPdmVyQmFja2dyb3VuZChEZXBlbmRlbmN5T2JqZWN0IG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoQnJ1c2gpb2JqLkdldFZhbHVlKE1vdXNlT3ZlckJhY2tncm91bmRQcm9wZXJ0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgU2V0TW91c2VPdmVyQmFja2dyb3VuZChEZXBlbmRlbmN5T2JqZWN0IG9iaiwgQnJ1c2ggdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvYmouU2V0VmFsdWUoTW91c2VPdmVyQmFja2dyb3VuZFByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVc2luZyBhIERlcGVuZGVuY3lQcm9wZXJ0eSBhcyB0aGUgYmFja2luZyBzdG9yZSBmb3IgTW91c2VPdmVyQmFja2dyb3VuZC4gIFRoaXMgZW5hYmxlcyBhbmltYXRpb24sIHN0eWxpbmcsIGJpbmRpbmcsIGV0Yy4uLlxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRGVwZW5kZW5jeVByb3BlcnR5IE1vdXNlT3ZlckJhY2tncm91bmRQcm9wZXJ0eSA9XHJcbiAgICAgICAgICAgIERlcGVuZGVuY3lQcm9wZXJ0eS5SZWdpc3RlckF0dGFjaGVkKFwiTW91c2VPdmVyQmFja2dyb3VuZFwiLCB0eXBlb2YoQnJ1c2gpLCB0eXBlb2YoU3R5bGVzKSwgbmV3IFByb3BlcnR5TWV0YWRhdGEoQnJ1c2hlcy5UcmFuc3BhcmVudCkpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYm9vbCBHZXRJc01vdXNlT3ZlckhlYWRlcihEZXBlbmRlbmN5T2JqZWN0IG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYm9vbClvYmouR2V0VmFsdWUoSXNNb3VzZU92ZXJIZWFkZXJQcm9wZXJ0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgU2V0SXNNb3VzZU92ZXJIZWFkZXIoRGVwZW5kZW5jeU9iamVjdCBvYmosIGJvb2wgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvYmouU2V0VmFsdWUoSXNNb3VzZU92ZXJIZWFkZXJQcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXNpbmcgYSBEZXBlbmRlbmN5UHJvcGVydHkgYXMgdGhlIGJhY2tpbmcgc3RvcmUgZm9yIElzTW91c2VPdmVySGVhZGVyLiAgVGhpcyBlbmFibGVzIGFuaW1hdGlvbiwgc3R5bGluZywgYmluZGluZywgZXRjLi4uXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZXBlbmRlbmN5UHJvcGVydHkgSXNNb3VzZU92ZXJIZWFkZXJQcm9wZXJ0eSA9XHJcbiAgICAgICAgICAgIERlcGVuZGVuY3lQcm9wZXJ0eS5SZWdpc3RlckF0dGFjaGVkKFwiSXNNb3VzZU92ZXJIZWFkZXJcIiwgdHlwZW9mKGJvb2wpLCB0eXBlb2YoU3R5bGVzKSwgbmV3IFByb3BlcnR5TWV0YWRhdGEoZmFsc2UpKTtcclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgSW5pdGlhbGl6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxuXHJcbm5hbWVzcGFjZSBDb2RleFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRW50aXR5QmFzZSA6IElTZXJpYWxpemFibGVFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIEluaXRpYWxpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25TZXJpYWxpemluZ0NvcmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25EZXNlcmlhbGl6ZWRDb3JlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIElTZXJpYWxpemFibGVFbnRpdHkuT25TZXJpYWxpemluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPblNlcmlhbGl6aW5nQ29yZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBJU2VyaWFsaXphYmxlRW50aXR5Lk9uRGVzZXJpYWxpemVkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9uRGVzZXJpYWxpemVkQ29yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElTZXJpYWxpemFibGVFbnRpdHlcclxuICAgIHtcclxuICAgICAgICB2b2lkIE9uRGVzZXJpYWxpemVkKCk7XHJcblxyXG4gICAgICAgIHZvaWQgT25TZXJpYWxpemluZygpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2UuSHRtbDU7XHJcbnVzaW5nIENvZGV4Lk9iamVjdE1vZGVsO1xyXG51c2luZyBDb2RleC5TZGsuU2VhcmNoO1xyXG51c2luZyBOZXd0b25zb2Z0Lkpzb247XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3LldlYlxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgV2ViQXBpQ29kZXggOiBJQ29kZXhcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHN0cmluZyBiYXNlVXJsO1xyXG5cclxuICAgICAgICBwdWJsaWMgV2ViQXBpQ29kZXgoc3RyaW5nIGJhc2VVcmwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsLkVuZHNXaXRoKFwiL1wiKSA/IGJhc2VVcmwgOiBiYXNlVXJsICsgJy8nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJUmVmZXJlbmNlU2VhcmNoTW9kZWw+PiBGaW5kQWxsUmVmZXJlbmNlc0FzeW5jKEZpbmRBbGxSZWZlcmVuY2VzQXJndW1lbnRzIGFyZ3VtZW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBQb3N0QXN5bmM8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxSZWZlcmVuY2VTZWFyY2hNb2RlbD4sIEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SVJlZmVyZW5jZVNlYXJjaE1vZGVsPj4oQ29kZXhTZXJ2aWNlTWV0aG9kLkZpbmRBbGxSZWZzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJRGVmaW5pdGlvblNlYXJjaE1vZGVsPj4gRmluZERlZmluaXRpb25Bc3luYyhGaW5kRGVmaW5pdGlvbkFyZ3VtZW50cyBhcmd1bWVudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gUG9zdEFzeW5jPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8RGVmaW5pdGlvblNlYXJjaE1vZGVsPiwgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJRGVmaW5pdGlvblNlYXJjaE1vZGVsPj4oQ29kZXhTZXJ2aWNlTWV0aG9kLkZpbmREZWYsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElSZWZlcmVuY2VTZWFyY2hNb2RlbD4+IEZpbmREZWZpbml0aW9uTG9jYXRpb25Bc3luYyhGaW5kRGVmaW5pdGlvbkxvY2F0aW9uQXJndW1lbnRzIGFyZ3VtZW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBQb3N0QXN5bmM8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxSZWZlcmVuY2VTZWFyY2hNb2RlbD4sIEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SVJlZmVyZW5jZVNlYXJjaE1vZGVsPj4oQ29kZXhTZXJ2aWNlTWV0aG9kLkZpbmREZWZMb2NhdGlvbiwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUYXNrPEluZGV4UXVlcnlSZXNwb25zZTxJQm91bmRTb3VyY2VTZWFyY2hNb2RlbD4+IEdldFNvdXJjZUFzeW5jKEdldFNvdXJjZUFyZ3VtZW50cyBhcmd1bWVudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gUG9zdEFzeW5jPEluZGV4UXVlcnlSZXNwb25zZTxCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPiwgSW5kZXhRdWVyeVJlc3BvbnNlPElCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPj4oQ29kZXhTZXJ2aWNlTWV0aG9kLkdldFNvdXJjZSwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUYXNrPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SVNlYXJjaFJlc3VsdD4+IFNlYXJjaEFzeW5jKFNlYXJjaEFyZ3VtZW50cyBhcmd1bWVudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gUG9zdEFzeW5jPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8U2VhcmNoUmVzdWx0PiwgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0Pj4oQ29kZXhTZXJ2aWNlTWV0aG9kLlNlYXJjaCwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgVGFzazxUUmVzdWx0PiBQb3N0QXN5bmM8VFNlcmlhbGl6ZWRSZXN1bHQsIFRSZXN1bHQ+KFxyXG4gICAgICAgICAgICBDb2RleFNlcnZpY2VNZXRob2Qgc2VhcmNoTWV0aG9kLFxyXG4gICAgICAgICAgICBvYmplY3QgYXJndW1lbnRzKVxyXG4gICAgICAgICAgICB3aGVyZSBUUmVzdWx0IDogSW5kZXhRdWVyeVJlc3BvbnNlLCBuZXcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGFza0NvbXBsZXRpb25Tb3VyY2U8VFJlc3VsdD4gdGNzID0gbmV3IFRhc2tDb21wbGV0aW9uU291cmNlPFRSZXN1bHQ+KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXJsID0gYmFzZVVybCArIHNlYXJjaE1ldGhvZC5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZSh1cmwpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFyZ3VtZW50c0RhdGEgPSBKc29uQ29udmVydC5TZXJpYWxpemVPYmplY3QoYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb25maWcgPSBuZXcgUmV0eXBlZC5qcXVlcnkuSlF1ZXJ5QWpheFNldHRpbmdzXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IHVybCxcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBhcmd1bWVudHNEYXRhLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgY29udGVudFR5cGUgb2YgdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IChkYXRhLCB0ZXh0U3RhdHVzLCBzdWNjZXNzUmVxdWVzdCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0Y3MuU2V0UmVzdWx0KEpzb25Db252ZXJ0LkRlc2VyaWFsaXplT2JqZWN0PFRTZXJpYWxpemVkUmVzdWx0PihzdWNjZXNzUmVxdWVzdC5yZXNwb25zZVRleHQpLkFzPFRSZXN1bHQ+KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IChlcnJvclJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRjcy5TZXRSZXN1bHQobmV3IFRSZXN1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXJyb3IgPSBzdHJpbmcuRm9ybWF0KFwiRXJyb3I6IHswfVwiLGVycm9yVGhyb3duKSAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgUmV0eXBlZC5qcXVlcnkualF1ZXJ5LmFqYXgoY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0Y3MuVGFzaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
